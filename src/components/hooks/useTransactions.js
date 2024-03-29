import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionContextProvider';
import useCompletionToast from './useCompletionToast';

export default function UseTransactions() {
  const { getAccessTokenSilently } = useAuth0();
  const { showErrorToast } = useCompletionToast();
  const { setTransactions, setLoadingTransaction } = useContext(TransactionContext);

  const getTransactions = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/transactions/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  const runGetTransactions = () => {
    setLoadingTransaction(true);
    getTransactions()
      .then((response) => {
        setTransactions(response.data);
        setLoadingTransaction(false);
      })
      .catch((err) => {
        showErrorToast(err.message);
        setLoadingTransaction(false);
      });
  };

  return runGetTransactions;
}
