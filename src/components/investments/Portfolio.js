import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Text,
  HStack,
  VStack,
  Heading,
  Box
} from '@chakra-ui/react';
import { RepeatIcon, DeleteIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';

import { serverURL } from '../../services/investmentService';
import Loading from '../Loading';
import AddAssetModal from './AddAssetModal';
import HistoryDrawer from './HistoryDrawer';
import RowAsset from './RowAsset';

export default function Portfolio() {
  const [assets, setAssets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { getAccessTokenSilently, user } = useAuth0();

  const promptRefresh = () => setRefresh(!refresh);

  const getOwnedAssets = async () => {
    setLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(serverURL, { headers: { Authorization: `Bearer ${token}` } });
      if (results) {
        // bruh
        setAssets(results.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => setAssets(getOwnedAssets()), [refresh]);

  const loadMore = () => {};

  const deleteAsset = async (assetId) => {
    try {
      const token = await getAccessTokenSilently();
      await axios.delete(`${serverURL}${assetId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      promptRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      h="100vh"
      flexDir="column"
      overflow="hidden"
      alignItems="center"
      gap={4}
      bgColor="gray.100">
      <HStack>
        <Flex>{/** Chart1 */}</Flex>
        <Flex>{/** Chart2 */}</Flex>
      </HStack>
      {isLoading ? (
        <Loading />
      ) : (
        <Flex
          flexDir="column"
          maxW="1200px"
          size="md"
          bgColor="white"
          borderRadius={15}
          boxShadow="base"
          alignItems="center"
          p={5}
          overflow="auto">
          <Heading size="lg" my={4}>
            {`${user.name || user.nickname}'s `}assets
          </Heading>
          <Table>
            <Thead>
              <Tr color="gray.200">
                <Th>SYMBOL/NAME</Th>
                <Th>POSITION</Th>
                <Th>COST BASIS</Th>
                <Th>TYPE</Th>
                <Th>DATE</Th>
                <Th>MARKET VALUE</Th>
                <Th>P/L</Th>
              </Tr>
            </Thead>
            <Tbody>
              {assets.map((asset) => (
                <RowAsset key={uuidv4()} asset={asset} deleteAsset={deleteAsset} />
              ))}
            </Tbody>
          </Table>
          <IconButton
            variant="ghost"
            size="md"
            icon={<ChevronDownIcon w={10} h={10} />}
            onClick={loadMore}
            m={2}
          />
        </Flex>
      )}
      <HStack pos="absolute" bottom="0" zIndex={10} m={2}>
        <AddAssetModal />
        <IconButton icon={<RepeatIcon />} aria-label="Refresh" onClick={promptRefresh} />
      </HStack>
      <HistoryDrawer />
    </Flex>
  );
}
