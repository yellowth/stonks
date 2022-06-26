const usStockSymbols = [
  {
    id: '1',
    name: 'Boeing',
    short_name: 'BA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2',
    name: 'Chevron',
    short_name: 'CVX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3',
    name: 'Caterpillar',
    short_name: 'CAT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4',
    name: 'Intel',
    short_name: 'INTC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5',
    name: 'Microsoft',
    short_name: 'MSFT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6',
    name: 'Walt Disney',
    short_name: 'DIS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7',
    name: 'Dow',
    short_name: 'DOW',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8',
    name: 'Cisco',
    short_name: 'CSCO',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9',
    name: 'Goldman Sachs',
    short_name: 'GS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10',
    name: 'JPMorgan',
    short_name: 'JPM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '11',
    name: 'Coca-Cola',
    short_name: 'KO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12',
    name: 'McDonald\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s',
    short_name: 'MCD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '13',
    name: 'Merck&Co',
    short_name: 'MRK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '14',
    name: '3M',
    short_name: 'MMM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '15',
    name: 'Apple',
    short_name: 'AAPL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '16',
    name: 'Exxon Mobil',
    short_name: 'XOM',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17',
    name: 'Pfizer',
    short_name: 'PFE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18',
    name: 'Walmart',
    short_name: 'WMT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '19',
    name: 'Home Depot',
    short_name: 'HD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '20',
    name: 'IBM',
    short_name: 'IBM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '21',
    name: 'Verizon',
    short_name: 'VZ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '22',
    name: 'Travelers',
    short_name: 'TRV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '23',
    name: 'J&J',
    short_name: 'JNJ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '24',
    name: 'American Express',
    short_name: 'AXP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '25',
    name: 'Raytheon Technologies',
    short_name: 'RTX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '26',
    name: 'Visa A',
    short_name: 'V',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '27',
    name: 'Walgreens Boots',
    short_name: 'WBA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '28',
    name: 'UnitedHealth',
    short_name: 'UNH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '29',
    name: 'Nike',
    short_name: 'NKE',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '30',
    name: 'Procter&Gamble',
    short_name: 'PG',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '31',
    name: 'eBay',
    short_name: 'EBAY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '32',
    name: 'Kraft Heinz',
    short_name: 'KHC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '33',
    name: 'Vertex',
    short_name: 'VRTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '34',
    name: 'Monster Beverage',
    short_name: 'MNST',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '35',
    name: 'Cintas',
    short_name: 'CTAS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '36',
    name: 'Autodesk',
    short_name: 'ADSK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '37',
    name: 'Gilead',
    short_name: 'GILD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '38',
    name: 'Alphabet A',
    short_name: 'GOOGL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '39',
    name: 'Fiserv',
    short_name: 'FISV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '40',
    name: 'Liberty Global',
    short_name: 'LBTYA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '41',
    name: 'Adobe',
    short_name: 'ADBE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '42',
    name: 'Qualcomm',
    short_name: 'QCOM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '43',
    name: 'Baidu',
    short_name: 'BIDU',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '44',
    name: 'Applied Materials',
    short_name: 'AMAT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '45',
    name: 'Cadence Design',
    short_name: 'CDNS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '46',
    name: 'Microchip',
    short_name: 'MCHP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '47',
    name: 'Wynn Resorts',
    short_name: 'WYNN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '48',
    name: 'Intuitive Surgical',
    short_name: 'ISRG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '49',
    name: 'Henry Schein',
    short_name: 'HSIC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '50',
    name: 'Paychex',
    short_name: 'PAYX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '51',
    name: 'VeriSign',
    short_name: 'VRSN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '52',
    name: 'Fastenal',
    short_name: 'FAST',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '53',
    name: 'Citrix Systems',
    short_name: 'CTXS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '54',
    name: 'Sirius XM',
    short_name: 'SIRI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '55',
    name: 'PACCAR',
    short_name: 'PCAR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '56',
    name: 'Amazon.com',
    short_name: 'AMZN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '57',
    name: 'Ross Stores',
    short_name: 'ROST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '58',
    name: 'NetEase',
    short_name: 'NTES',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '59',
    name: 'NetApp',
    short_name: 'NTAP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '60',
    name: 'Costco',
    short_name: 'COST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '61',
    name: 'Check Point Software',
    short_name: 'CHKP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '62',
    name: 'Lam Research',
    short_name: 'LRCX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '63',
    name: 'Intuit',
    short_name: 'INTU',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '64',
    name: 'Expedia',
    short_name: 'EXPE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '65',
    name: 'Trip.com ADR',
    short_name: 'TCOM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '66',
    name: 'Cognizant A',
    short_name: 'CTSH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '67',
    name: 'KLA-Tencor',
    short_name: 'KLAC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '68',
    name: 'Activision Blizzard',
    short_name: 'ATVI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '69',
    name: 'Amgen',
    short_name: 'AMGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '70',
    name: 'Xilinx',
    short_name: 'XLNX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '71',
    name: 'Electronic Arts',
    short_name: 'EA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '72',
    name: 'Biogen',
    short_name: 'BIIB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '73',
    name: 'NortonLifeLock Inc',
    short_name: 'NLOK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '74',
    name: 'NVIDIA',
    short_name: 'NVDA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '75',
    name: 'Starbucks',
    short_name: 'SBUX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '76',
    name: 'Celgene',
    short_name: 'CELG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '77',
    name: 'Comcast',
    short_name: 'CMCSA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '78',
    name: 'Analog Devices',
    short_name: 'ADI',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '79',
    name: 'Xcel Energy',
    short_name: 'XEL',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '80',
    name: 'CSX',
    short_name: 'CSX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '81',
    name: 'Micron',
    short_name: 'MU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '82',
    name: 'Western Digital',
    short_name: 'WDC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '83',
    name: 'Marriott Int',
    short_name: 'MAR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '84',
    name: 'Texas Instruments',
    short_name: 'TXN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '85',
    name: 'AMD',
    short_name: 'AMD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '86',
    name: 'Hasbro',
    short_name: 'HAS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '87',
    name: 'PepsiCo',
    short_name: 'PEP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '88',
    name: 'ADP',
    short_name: 'ADP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '89',
    name: 'United Airlines Holdings',
    short_name: 'UAL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '90',
    name: 'Netflix',
    short_name: 'NFLX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '91',
    name: 'Cerner',
    short_name: 'CERN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '92',
    name: 'Booking',
    short_name: 'BKNG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '93',
    name: 'O\u00c2\u00a2\u00c2\u20ac\u00c2\u2122Reilly Automotive',
    short_name: 'ORLY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '94',
    name: 'Illumina',
    short_name: 'ILMN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '95',
    name: 'JB Hunt',
    short_name: 'JBHT',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '96',
    name: 'Maxim',
    short_name: 'MXIM',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '97',
    name: 'Viatris',
    short_name: 'VTRS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '98',
    name: 'Alexion',
    short_name: 'ALXN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '99',
    name: 'Broadcom',
    short_name: 'AVGO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '100',
    name: 'NXP',
    short_name: 'NXPI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '101',
    name: 'Tesla',
    short_name: 'TSLA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '102',
    name: 'Take-Two',
    short_name: 'TTWO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '103',
    name: 'Dollar Tree',
    short_name: 'DLTR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '104',
    name: 'Align',
    short_name: 'ALGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '105',
    name: 'Biomarin Pharma',
    short_name: 'BMRN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '106',
    name: 'Charter Communications',
    short_name: 'CHTR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '107',
    name: 'IDEXX Labs',
    short_name: 'IDXX',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '108',
    name: 'Incyte',
    short_name: 'INCY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '109',
    name: 'Liberty Global C',
    short_name: 'LBTYK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '110',
    name: 'MercadoLibre',
    short_name: 'MELI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '111',
    name: 'T-Mobile US',
    short_name: 'TMUS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '112',
    name: 'Meta Platforms',
    short_name: 'FB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '113',
    name: 'Willis Towers Watson',
    short_name: 'WLTW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '114',
    name: 'Workday',
    short_name: 'WDAY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '115',
    name: 'Mondelez',
    short_name: 'MDLZ',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '116',
    name: 'Skyworks',
    short_name: 'SWKS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '117',
    name: 'Lululemon Athletica',
    short_name: 'LULU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118',
    name: 'Regeneron Pharma',
    short_name: 'REGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '119',
    name: 'ASML ADR',
    short_name: 'ASML',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120',
    name: 'Synopsys',
    short_name: 'SNPS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121',
    name: 'Ulta Beauty',
    short_name: 'ULTA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '122',
    name: 'Verisk',
    short_name: 'VRSK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '123',
    name: 'American Airlines',
    short_name: 'AAL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '124',
    name: 'Alphabet C',
    short_name: 'GOOG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '125',
    name: 'JD.com Inc Adr',
    short_name: 'JD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '126',
    name: 'PayPal Holdings Inc',
    short_name: 'PYPL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '127',
    name: 'Fox Corp A',
    short_name: 'FOXA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '128',
    name: 'Fox Corp B',
    short_name: 'FOX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '134',
    name: 'Goodyear Tire & Rubber Co',
    short_name: 'GT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '135',
    name: 'ODP',
    short_name: 'ODP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '136',
    name: 'Fifth Third',
    short_name: 'FITB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '137',
    name: 'DISH Network',
    short_name: 'DISH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '138',
    name: 'aTyr Pharma',
    short_name: 'LIFE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '139',
    name: 'PDL BioPharma',
    short_name: 'PDLI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '140',
    name: 'SINA Corp',
    short_name: 'SINA',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '141',
    name: 'Sohu.Com',
    short_name: 'SOHU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '142',
    name: 'Warner Bros Discovery',
    short_name: 'DISCA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '143',
    name: 'Ribbon Com',
    short_name: 'RBBN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '144',
    name: 'Steel Dynamics',
    short_name: 'STLD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '145',
    name: 'Bed Bath&Beyond',
    short_name: 'BBBY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '146',
    name: 'Nasdaq Inc',
    short_name: 'NDAQ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '147',
    name: 'Ryanair ADR',
    short_name: 'RYAAY',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '148',
    name: 'JetBlue',
    short_name: 'JBLU',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '149',
    name: 'Shyft Group Inc',
    short_name: 'SHYF',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '150',
    name: 'Dentsply',
    short_name: 'XRAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '151',
    name: 'Crocs',
    short_name: 'CROX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '152',
    name: 'Zions',
    short_name: 'ZION',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '153',
    name: 'Northern Trust',
    short_name: 'NTRS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '154',
    name: 'Lamar',
    short_name: 'LAMR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '155',
    name: 'Patterson-UTI Energy',
    short_name: 'PTEN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '156',
    name: 'Atlanticuss',
    short_name: 'ATLC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '157',
    name: 'CH Robinson',
    short_name: 'CHRW',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '158',
    name: 'Alpine Immune Sciences',
    short_name: 'ALPN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '159',
    name: 'Pan American Silver',
    short_name: 'PAAS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '160',
    name: 'Viavi Solutions',
    short_name: 'VIAV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '161',
    name: 'E-TRADE',
    short_name: 'ETFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '162',
    name: 'Garmin',
    short_name: 'GRMN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '163',
    name: 'IAC/InterActiveCorp',
    short_name: 'IAC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '164',
    name: 'UTStarcom',
    short_name: 'UTSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '165',
    name: 'Rambus',
    short_name: 'RMBS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '166',
    name: 'NII Holdings',
    short_name: 'NIHD_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '167',
    name: 'Yellow',
    short_name: 'YELL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '168',
    name: 'Akamai',
    short_name: 'AKAM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '169',
    name: 'Flex',
    short_name: 'FLEX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '170',
    name: 'Expeditors Washington',
    short_name: 'EXPD',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '171',
    name: 'Patterson',
    short_name: 'PDCO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '172',
    name: 'T Rowe',
    short_name: 'TROW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '173',
    name: 'Qurate Retail A',
    short_name: 'QRTEA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '174',
    name: 'Huntington Bancshares',
    short_name: 'HBAN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '175',
    name: 'Stericycle',
    short_name: 'SRCL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '176',
    name: 'Cincinnati Financial',
    short_name: 'CINF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '177',
    name: 'Extreme',
    short_name: 'EXTR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '178',
    name: 'Axon Enterprise',
    short_name: 'AXON',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '179',
    name: 'Hologic',
    short_name: 'HOLX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '180',
    name: 'Capstone Green Energy',
    short_name: 'CGRN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '181',
    name: 'Marvell',
    short_name: 'MRVL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '182',
    name: 'Ballard',
    short_name: 'BLDP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '183',
    name: 'Sify',
    short_name: 'SIFY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '184',
    name: 'Mattel',
    short_name: 'MAT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '185',
    name: 'Exelon',
    short_name: 'EXC',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '186',
    name: 'SLM',
    short_name: 'SLM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '187',
    name: 'Paramount Global B',
    short_name: 'VIAC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '188',
    name: 'Frontier Com',
    short_name: 'FTRCQ',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '189',
    name: 'Principal Financial',
    short_name: 'PFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '190',
    name: 'Viacom A',
    short_name: 'VIA_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '191',
    name: 'Newell Brands',
    short_name: 'NWL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '192',
    name: 'Teradyne',
    short_name: 'TER',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '193',
    name: 'FLIR Systems',
    short_name: 'FLIR',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '194',
    name: 'SunPower',
    short_name: 'SPWR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '195',
    name: 'Seagate',
    short_name: 'STX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '196',
    name: 'Allscripts',
    short_name: 'MDRX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '197',
    name: 'SSR Mining',
    short_name: 'SSRM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '198',
    name: 'Middleby Corp',
    short_name: 'MIDD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '199',
    name: 'News Corp',
    short_name: 'NWS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '200',
    name: 'Equinix',
    short_name: 'EQIX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '201',
    name: 'Seagen',
    short_name: 'SGEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '202',
    name: 'CMC Materials',
    short_name: 'CCMP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '203',
    name: 'CME Group',
    short_name: 'CME',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '204',
    name: 'Urban Outfitters',
    short_name: 'URBN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '205',
    name: 'EW Scripps A',
    short_name: 'SSP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '206',
    name: 'First Solar',
    short_name: 'FSLR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '207',
    name: 'F5 Networks',
    short_name: 'FFIV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '208',
    name: 'News Corp A',
    short_name: 'NWSA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '209',
    name: 'ADTRAN',
    short_name: 'ADTN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '210',
    name: 'Advanced Energy',
    short_name: 'AEIS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '211',
    name: 'Airnet Tech',
    short_name: 'ANTE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '212',
    name: 'Arena Pharma',
    short_name: 'ARNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '213',
    name: 'Celsion',
    short_name: 'CLSN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '214',
    name: 'Wolfspeed',
    short_name: 'CREE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '215',
    name: 'Cirrus',
    short_name: 'CRUS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '216',
    name: 'Dunkin Brands',
    short_name: 'DNKN',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '217',
    name: 'Entegris',
    short_name: 'ENTG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '218',
    name: 'The Hain Celestial',
    short_name: 'HAIN',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '219',
    name: 'IPG Photonics',
    short_name: 'IPGP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '220',
    name: 'Ionis Pharma',
    short_name: 'IONS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '221',
    name: 'Itron',
    short_name: 'ITRI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '222',
    name: 'ManTech',
    short_name: 'MANT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '223',
    name: 'Motorcar Parts',
    short_name: 'MPAA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '224',
    name: 'Nuance Communications',
    short_name: 'NUAN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '225',
    name: 'QuickLogic',
    short_name: 'QUIK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '226',
    name: 'Radware',
    short_name: 'RDWR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '227',
    name: 'Royal Gold',
    short_name: 'RGLD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '228',
    name: 'Yandex',
    short_name: 'YNDX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '229',
    name: 'Atlantic American',
    short_name: 'AAME',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '230',
    name: 'AAON',
    short_name: 'AAON',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '231',
    name: 'Atlas Air',
    short_name: 'AAWW',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '232',
    name: 'Ameris',
    short_name: 'ABCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '233',
    name: 'ArcBest Corp',
    short_name: 'ARCB',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '234',
    name: 'ARCA Biopharma',
    short_name: 'ABIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '235',
    name: 'ABIOMED',
    short_name: 'ABMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '236',
    name: 'Autoweb',
    short_name: 'AUTO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '237',
    name: 'ACADIA',
    short_name: 'ACAD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '238',
    name: 'Acadia Healthcare',
    short_name: 'ACHC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '239',
    name: 'Achillion',
    short_name: 'ACHN_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '240',
    name: 'ACI Worldwide',
    short_name: 'ACIW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '241',
    name: 'Axcelis',
    short_name: 'ACLS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '242',
    name: 'ACNB',
    short_name: 'ACNB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '243',
    name: 'Acorda',
    short_name: 'ACOR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '244',
    name: 'AcelRx',
    short_name: 'ACRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '245',
    name: 'Acacia Research',
    short_name: 'ACTG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '246',
    name: 'ADES',
    short_name: 'ADES',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '247',
    name: 'Addus',
    short_name: 'ADUS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '248',
    name: 'Aegion',
    short_name: 'AEGN',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '249',
    name: 'Aehr Test Systems',
    short_name: 'AEHR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '250',
    name: 'ADDvantage',
    short_name: 'AEY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '251',
    name: 'Aeterna Zentaris',
    short_name: 'AEZS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '252',
    name: 'Agenus',
    short_name: 'AGEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '253',
    name: 'AGNC Invest',
    short_name: 'AGNC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '254',
    name: 'Agilysys',
    short_name: 'AGYS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '255',
    name: 'Allied Healthcare',
    short_name: 'AHPI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '256',
    name: 'Altra',
    short_name: 'AIMC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '257',
    name: 'Air T',
    short_name: 'AIRT',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '258',
    name: 'Akorn',
    short_name: 'AKRXQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '259',
    name: 'Alico',
    short_name: 'ALCO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '260',
    name: 'Allegiant',
    short_name: 'ALGT',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '261',
    name: 'Alimera',
    short_name: 'ALIM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '262',
    name: 'Alkermes Plc',
    short_name: 'ALKS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '263',
    name: 'Allot Communications',
    short_name: 'ALLT',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '264',
    name: 'Alnylam',
    short_name: 'ALNY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '265',
    name: 'AstroNova',
    short_name: 'ALOT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '266',
    name: 'Alaska Communications',
    short_name: 'ALSK',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '267',
    name: 'AMAG',
    short_name: 'AMAG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '268',
    name: 'Amedisys',
    short_name: 'AMED',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '269',
    name: 'Amkor',
    short_name: 'AMKR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '270',
    name: 'American National Bankshares',
    short_name: 'AMNB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '271',
    name: 'Allied Motion',
    short_name: 'AMOT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '272',
    name: 'American River',
    short_name: 'AMRB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '273',
    name: 'Amyris',
    short_name: 'AMRS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '274',
    name: 'American Superconductor',
    short_name: 'AMSC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '275',
    name: 'AMERISAFE',
    short_name: 'AMSF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '276',
    name: 'American Software',
    short_name: 'AMSWA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '277',
    name: 'TD Ameritrade',
    short_name: 'AMTD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '278',
    name: 'American Woodmark',
    short_name: 'AMWD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '279',
    name: 'American National Insurance',
    short_name: 'ANAT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '280',
    name: 'The Andersons',
    short_name: 'ANDE',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '281',
    name: 'AngioDynamics',
    short_name: 'ANGO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '282',
    name: 'Anika',
    short_name: 'ANIK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '283',
    name: 'ANSYS',
    short_name: 'ANSS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '284',
    name: 'Alpha & Omega Semiconductor',
    short_name: 'AOSL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '285',
    name: 'American Public Education',
    short_name: 'APEI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '286',
    name: 'Apogee',
    short_name: 'APOG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '287',
    name: 'Riot Blockchain',
    short_name: 'RIOT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '288',
    name: 'Seelos Therapeutics',
    short_name: 'SEEL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '289',
    name: 'IRSA Propiedades ADR',
    short_name: 'IRCP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '290',
    name: 'Asia Pacific Wire & Cable',
    short_name: 'APWC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '291',
    name: 'Accuray',
    short_name: 'ARAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '292',
    name: 'Janone',
    short_name: 'JAN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '293',
    name: 'Approach Resources',
    short_name: 'AREXQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '294',
    name: 'Gentherm',
    short_name: 'THRM',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '295',
    name: 'Ark Restaurants',
    short_name: 'ARKR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '296',
    name: 'Alliance Resource',
    short_name: 'ARLP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '297',
    name: 'Arrow',
    short_name: 'AROW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '298',
    name: 'ArQule',
    short_name: 'ARQL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '299',
    name: 'Artesian',
    short_name: 'ARTNA',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '300',
    name: 'Arts-Way',
    short_name: 'ARTW',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '301',
    name: 'Arotech',
    short_name: 'ARTX_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '302',
    name: 'Arrowhead Pharma',
    short_name: 'ARWR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '303',
    name: 'Asta Funding',
    short_name: 'ASFI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '304',
    name: 'Ascena Retail',
    short_name: 'ASNAQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '305',
    name: 'AmeriServ',
    short_name: 'ASRV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '306',
    name: 'Astrotech',
    short_name: 'ASTC',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '307',
    name: 'Astec',
    short_name: 'ASTE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '308',
    name: 'Vericel Corp Ord',
    short_name: 'VCEL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '309',
    name: 'Asure',
    short_name: 'ASUR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '310',
    name: 'Amtech',
    short_name: 'ASYS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '311',
    name: 'America First Tax',
    short_name: 'ATAX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '312',
    name: 'Alphatecs',
    short_name: 'ATEC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '313',
    name: 'Athersys',
    short_name: 'ATHX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '314',
    name: 'Ames',
    short_name: 'ATLO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '315',
    name: 'ATN Int',
    short_name: 'ATNI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '316',
    name: 'AtriCure',
    short_name: 'ATRC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '317',
    name: 'ATRION',
    short_name: 'ATRI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '318',
    name: 'Astronics',
    short_name: 'ATRO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '319',
    name: 'Auburn',
    short_name: 'AUBN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '320',
    name: 'AudioCodes',
    short_name: 'AUDC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '321',
    name: 'AeroVironment',
    short_name: 'AVAV',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '322',
    name: 'AVEO',
    short_name: 'AVEO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '323',
    name: 'Avid',
    short_name: 'AVID',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '324',
    name: 'Sarepta',
    short_name: 'SRPT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '325',
    name: 'Aviat',
    short_name: 'AVNW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '326',
    name: 'Aware',
    short_name: 'AWRE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '327',
    name: 'Abraxas Petroleum',
    short_name: 'AXAS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '328',
    name: 'AXT',
    short_name: 'AXTI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '329',
    name: 'Natus',
    short_name: 'NTUS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '330',
    name: 'BancFirst',
    short_name: 'BANF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '331',
    name: 'Banner',
    short_name: 'BANR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '332',
    name: 'Inotiv',
    short_name: 'NOTV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '333',
    name: 'Hope Bancorp',
    short_name: 'HOPE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '334',
    name: 'Beasley',
    short_name: 'BBGI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '335',
    name: 'Barrett',
    short_name: 'BBSI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '336',
    name: 'BCB Bancorp',
    short_name: 'BCBP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '337',
    name: 'B Communications',
    short_name: 'BCOMF',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '338',
    name: 'Balchem',
    short_name: 'BCPC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '339',
    name: 'BioCryst',
    short_name: 'BCRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '340',
    name: 'Clarus',
    short_name: 'CLAR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '341',
    name: 'Bridge Bancorp',
    short_name: 'BDGE_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '342',
    name: 'BioDelivery Sciences',
    short_name: 'BDSI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '343',
    name: 'BioTelemetry',
    short_name: 'BEAT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '344',
    name: 'Beacon Roofing',
    short_name: 'BECN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '345',
    name: 'Bel Fuse A',
    short_name: 'BELFA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '346',
    name: 'Bel Fuse B',
    short_name: 'BELFB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '347',
    name: 'BankFinancial',
    short_name: 'BFIN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '348',
    name: 'BGC Partners',
    short_name: 'BGCP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '349',
    name: 'Big 5',
    short_name: 'BGFV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '350',
    name: 'Biocept',
    short_name: 'BIOC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '351',
    name: 'Albireo Pharma',
    short_name: 'ALBO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '352',
    name: 'Green Brick Partners Inc',
    short_name: 'GRBK',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '353',
    name: 'Option Care Health',
    short_name: 'OPCH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '354',
    name: 'BJs Restaurants',
    short_name: 'BJRI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '355',
    name: 'Blueknight',
    short_name: 'BKEP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '356',
    name: 'Bank of South Carolina',
    short_name: 'BKSC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '357',
    name: 'Builders FirstSource',
    short_name: 'BLDR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '358',
    name: 'Bridgeline Digital',
    short_name: 'BLIN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '359',
    name: 'Blackbaud',
    short_name: 'BLKB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '360',
    name: 'BioLineRx',
    short_name: 'BLRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '361',
    name: 'BIOLASE',
    short_name: 'BIOL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '362',
    name: 'Bank of Marin',
    short_name: 'BMRC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '363',
    name: 'Bryn Mawr Bank',
    short_name: 'BMTC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '364',
    name: 'Bonso Electronics Int',
    short_name: 'BNSO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '365',
    name: 'Bank of Commerce',
    short_name: 'BOCH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '366',
    name: 'BOK Financial',
    short_name: 'BOKF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '367',
    name: 'Dmc Global',
    short_name: 'BOOM',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '368',
    name: 'BOS',
    short_name: 'BOSC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '369',
    name: 'Boston Private',
    short_name: 'BPFH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '370',
    name: 'Bridgford',
    short_name: 'BRID',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '371',
    name: 'Brookline Bancorp',
    short_name: 'BRKL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '372',
    name: 'Azenta',
    short_name: 'BRKS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '373',
    name: 'Bassett',
    short_name: 'BSET',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '374',
    name: 'BSQUARE',
    short_name: 'BSQR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '375',
    name: 'Sierra Bancorp',
    short_name: 'BSRR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '376',
    name: 'BioSpecifics',
    short_name: 'BSTC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '377',
    name: 'First Busey',
    short_name: 'BUSE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '378',
    name: 'BroadVision',
    short_name: 'BVSN_old',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '379',
    name: 'Broadwind',
    short_name: 'BWEN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '380',
    name: 'Protective Insurance A',
    short_name: 'PTVCA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '381',
    name: 'Protective Insurance B',
    short_name: 'PTVCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '382',
    name: 'Broadway Financial',
    short_name: 'BYFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '383',
    name: 'China Automotive',
    short_name: 'CAAS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '384',
    name: 'Camden',
    short_name: 'CAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '385',
    name: 'Credit Acceptance',
    short_name: 'CACC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '386',
    name: 'Color Star Technology Co',
    short_name: 'CSCW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '387',
    name: 'The Cheesecake',
    short_name: 'CAKE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '388',
    name: 'Cal-Maine',
    short_name: 'CALM',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '389',
    name: 'CalAmp',
    short_name: 'CAMP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '390',
    name: 'Camtek',
    short_name: 'CAMT',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '391',
    name: 'Carbonite',
    short_name: 'CARB_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '392',
    name: 'Carolina Trust Bank',
    short_name: 'CART_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '393',
    name: 'Carver',
    short_name: 'CARV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '394',
    name: 'Meta Financial',
    short_name: 'CASH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '395',
    name: 'Cass',
    short_name: 'CASS',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '396',
    name: 'Caseys',
    short_name: 'CASY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '397',
    name: 'Cardtronics',
    short_name: 'CATM',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '398',
    name: 'Cathay',
    short_name: 'CATY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '399',
    name: 'Mullen Automotive',
    short_name: 'NETE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '400',
    name: 'CBAK Energy',
    short_name: 'CBAT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '401',
    name: 'Colony Bankcorp',
    short_name: 'CBAN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '402',
    name: 'Statera Biopharma',
    short_name: 'STAB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '403',
    name: 'China Biologic',
    short_name: 'CBPO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '404',
    name: 'Cracker Barrel Old',
    short_name: 'CBRL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '405',
    name: 'Commerce Bancshares',
    short_name: 'CBSH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '406',
    name: 'Capital City Bank',
    short_name: 'CCBG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '407',
    name: 'Antelope Enterprise Holdings',
    short_name: 'AEHL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '408',
    name: 'CNB Financial',
    short_name: 'CCNE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '409',
    name: 'Cogent',
    short_name: 'CCOI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '410',
    name: 'Cross Country',
    short_name: 'CCRN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '411',
    name: 'Codexis',
    short_name: 'CDXS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '412',
    name: 'Cadiz',
    short_name: 'CDZI',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '413',
    name: 'CECO Environmental',
    short_name: 'CECE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '414',
    name: 'Career',
    short_name: 'PRDO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '415',
    name: 'Central Garden&Pet',
    short_name: 'CENT',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '416',
    name: 'Central Garden&Pet A',
    short_name: 'CENTA',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '417',
    name: 'Cerus',
    short_name: 'CERS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '418',
    name: 'Central European Media',
    short_name: 'CETV',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '419',
    name: 'CEVA',
    short_name: 'CEVA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '420',
    name: 'CF Bankshares',
    short_name: 'CFBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '421',
    name: 'C&F Financial',
    short_name: 'CFFI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '422',
    name: 'Capitol Federal',
    short_name: 'CFFN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '423',
    name: 'Pingtan Marine',
    short_name: 'PME',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '424',
    name: 'Compugen',
    short_name: 'CGEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '425',
    name: 'Cognex',
    short_name: 'CGNX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '426',
    name: 'Comstock',
    short_name: 'CHCI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '427',
    name: 'City Holding',
    short_name: 'CHCO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '428',
    name: 'Churchill Downs',
    short_name: 'CHDN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '429',
    name: 'The Chefs Warehouse',
    short_name: 'CHEF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '430',
    name: 'Apex Global Brands Inc',
    short_name: 'APEX',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '431',
    name: 'China Natural Resources',
    short_name: 'CHNR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '432',
    name: 'Coherus BioSciences',
    short_name: 'CHRS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '433',
    name: 'Cinedigm',
    short_name: 'CIDM',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '434',
    name: 'Fanhua',
    short_name: 'FANH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '435',
    name: 'Citizens',
    short_name: 'CIZN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '436',
    name: 'China Jo-Jo Drugstores',
    short_name: 'CJJD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '437',
    name: 'Collectors Universe',
    short_name: 'CLCT',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '438',
    name: 'Celldex Therapeutics',
    short_name: 'CLDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '439',
    name: 'Clearfield',
    short_name: 'CLFD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '440',
    name: 'Calumet',
    short_name: 'CLMT',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '441',
    name: 'Clean Energy',
    short_name: 'CLNE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '442',
    name: 'ClearOne',
    short_name: 'CLRO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '443',
    name: 'Town Sportss',
    short_name: 'CLUBQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '444',
    name: 'Clovis',
    short_name: 'CLVS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '445',
    name: 'Euro Tech',
    short_name: 'CLWT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '446',
    name: 'Columbus McKinnon',
    short_name: 'CMCO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '447',
    name: 'Destination XL Group',
    short_name: 'DXLG',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '448',
    name: 'Comtech',
    short_name: 'CMTL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '449',
    name: 'Century Bancorp',
    short_name: 'CNBKA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '450',
    name: 'Fortress Biotech',
    short_name: 'FBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '451',
    name: 'ZW Data Action Technologies',
    short_name: 'CNET',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '452',
    name: 'Taoping',
    short_name: 'TAOP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '453',
    name: 'CONMED',
    short_name: 'CNMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '454',
    name: 'Consolidated Communications',
    short_name: 'CNSL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '455',
    name: 'Century Casinos',
    short_name: 'CNTY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '456',
    name: 'Coherent',
    short_name: 'COHR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '457',
    name: 'Cohu',
    short_name: 'COHU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '458',
    name: 'Coca-Cola Bottling',
    short_name: 'COKE',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '459',
    name: 'Columbia Banking',
    short_name: 'COLB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '460',
    name: 'Columbia Sportswear',
    short_name: 'COLM',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '461',
    name: 'Conns',
    short_name: 'CONN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '462',
    name: 'Polarityte',
    short_name: 'PTE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '463',
    name: 'Core-Mark',
    short_name: 'CORE',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '464',
    name: 'Corcept',
    short_name: 'CORT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '465',
    name: 'Cowen Group',
    short_name: 'COWN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '466',
    name: 'Two Rivers Bancorp',
    short_name: 'TRCB_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '467',
    name: 'Canterbury Park',
    short_name: 'CPHC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '468',
    name: 'Cumberland',
    short_name: 'CPIX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '469',
    name: 'Capital Product',
    short_name: 'CPLP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '470',
    name: 'Catalyst Pharmaceuticals',
    short_name: 'CPRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '471',
    name: 'Computer Programs&Systems',
    short_name: 'CPSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '472',
    name: 'Consumer Portfolio Services',
    short_name: 'CPSS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '473',
    name: 'CRA',
    short_name: 'CRAI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '474',
    name: 'Smart Powerr',
    short_name: 'CREG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '475',
    name: 'Cresud SACIF',
    short_name: 'CRESY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '476',
    name: 'Curis',
    short_name: 'CRIS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '477',
    name: 'Correvio Pharma',
    short_name: 'CORV_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '478',
    name: 'Americas Car-Mart',
    short_name: 'CRMT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '479',
    name: 'Ceragon',
    short_name: 'CRNT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '480',
    name: 'CorVel',
    short_name: 'CRVL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '481',
    name: 'Crown Crafts',
    short_name: 'CRWS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '482',
    name: 'Carrizo Oil&Gas',
    short_name: 'CRZO_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '483',
    name: 'CenterState Banks',
    short_name: 'CSFL_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '484',
    name: 'CoStar',
    short_name: 'CSGP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '485',
    name: 'CSG Systems',
    short_name: 'CSGS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '486',
    name: 'Cardiovascular',
    short_name: 'CSII',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '487',
    name: 'Canadian Solar Inc',
    short_name: 'CSIQ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '488',
    name: 'Cornerstone OnDemand',
    short_name: 'CSOD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '489',
    name: 'CSP',
    short_name: 'CSPI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '490',
    name: 'Capital Southwest',
    short_name: 'CSWC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '491',
    name: 'Community Trust',
    short_name: 'CTBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '492',
    name: 'Cyren',
    short_name: 'CYRN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '493',
    name: 'Computer Task',
    short_name: 'CTG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '494',
    name: 'Charles&Colvard',
    short_name: 'CTHR',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '495',
    name: 'CTI Industries',
    short_name: 'CTIB',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '496',
    name: 'CTi Biopharma',
    short_name: 'CTIC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '497',
    name: 'Citi Trends',
    short_name: 'CTRN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '498',
    name: 'Cutera',
    short_name: 'CUTR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '499',
    name: 'CVB Financial',
    short_name: 'CVBF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '500',
    name: 'Cavco',
    short_name: 'CVCO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '501',
    name: 'Central Valley Community',
    short_name: 'CVCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '502',
    name: 'Commercial Vehicle',
    short_name: 'CVGI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '503',
    name: 'Calavo Growers',
    short_name: 'CVGW',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '504',
    name: 'Codorus Valley',
    short_name: 'CVLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '505',
    name: 'Covenant',
    short_name: 'CVLG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '506',
    name: 'CVD Equipment',
    short_name: 'CVV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '507',
    name: 'Community West Bancshares',
    short_name: 'CWBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '508',
    name: 'Consolidated Water',
    short_name: 'CWCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '509',
    name: 'Casella',
    short_name: 'CWST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '510',
    name: 'China XD Plastics',
    short_name: 'CXDC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '511',
    name: 'Cypress',
    short_name: 'CY_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '512',
    name: 'Cyanotech',
    short_name: 'CYAN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '513',
    name: 'CyberOptics',
    short_name: 'CYBE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '514',
    name: 'Cyclacel',
    short_name: 'CYCC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '515',
    name: 'Changyoucom',
    short_name: 'CYOU_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '516',
    name: 'Cytokinetics Inc',
    short_name: 'CYTK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '517',
    name: 'Plus Therapeutics',
    short_name: 'PSTV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '518',
    name: 'Citizens&Northern',
    short_name: 'CZNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '519',
    name: 'Citizens Community',
    short_name: 'CZWI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '520',
    name: 'Data I/O',
    short_name: 'DAIO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '521',
    name: 'Daktronics',
    short_name: 'DAKT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '522',
    name: 'BBQ Holdings',
    short_name: 'BBQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '523',
    name: 'Performance Shipping',
    short_name: 'PSHG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '524',
    name: 'Dime Community',
    short_name: 'DCOM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '525',
    name: 'Denny\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s',
    short_name: 'DENN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '526',
    name: 'Assertio Therapeutics',
    short_name: 'ASRT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '527',
    name: 'Destination Maternity',
    short_name: 'DESTQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '528',
    name: 'Donegal A',
    short_name: 'DGICA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '529',
    name: 'Donegal B',
    short_name: 'DGICB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '530',
    name: 'Digi',
    short_name: 'DGII',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '531',
    name: 'Digital Ally',
    short_name: 'DGLY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '532',
    name: 'Diamond Hill',
    short_name: 'DHIL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '533',
    name: 'Newegg Commerce',
    short_name: 'NEGG',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '534',
    name: 'Diodes',
    short_name: 'DIOD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '535',
    name: 'Discovery B',
    short_name: 'DISCB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '536',
    name: 'Discovery Communications C',
    short_name: 'DISCK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '537',
    name: 'Daily Journal Corp',
    short_name: 'DJCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '538',
    name: 'Dorchester Minerals',
    short_name: 'DMLP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '539',
    name: 'Digimarc',
    short_name: 'DMRC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '540',
    name: 'DNB Financial',
    short_name: 'DNBF_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '541',
    name: 'Dorman',
    short_name: 'DORM',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '542',
    name: 'Star Equity Holdings',
    short_name: 'STRR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '543',
    name: 'US Gold',
    short_name: 'USAU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '544',
    name: 'Durect',
    short_name: 'DRRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '545',
    name: 'Descartes Systems',
    short_name: 'DSGX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '546',
    name: 'DSP Group',
    short_name: 'DSPG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '547',
    name: 'Deswell Industries',
    short_name: 'DSWL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '548',
    name: 'Dynavax',
    short_name: 'DVAX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '549',
    name: 'Dawson Geophysical',
    short_name: 'DWSN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '550',
    name: 'DexCom',
    short_name: 'DXCM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '551',
    name: 'DXP Enterprises',
    short_name: 'DXPE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '552',
    name: 'The Dixie',
    short_name: 'DXYN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '553',
    name: 'Dynatronics',
    short_name: 'DYNT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '554',
    name: 'Global Eagle',
    short_name: 'GEENQ',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '555',
    name: 'Ebix',
    short_name: 'EBIX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '556',
    name: 'Eagle Montana',
    short_name: 'EBMT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '557',
    name: 'Meridian Interstate',
    short_name: 'EBSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '558',
    name: 'Enterprise',
    short_name: 'EBTC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '559',
    name: 'Echo Global',
    short_name: 'ECHO',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '560',
    name: 'US Ecology',
    short_name: 'ECOL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '561',
    name: 'Encore Capital',
    short_name: 'ECPG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '562',
    name: 'EDAP',
    short_name: 'EDAP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '563',
    name: 'Alithya A',
    short_name: 'ALYA',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '564',
    name: 'Educational Development',
    short_name: 'EDUC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '565',
    name: 'Euronet',
    short_name: 'EEFT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '566',
    name: 'Ecology&Environment',
    short_name: 'EEI_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '567',
    name: 'Enterprise Financial',
    short_name: 'EFSC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '568',
    name: 'eGain',
    short_name: 'EGAN',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '569',
    name: 'Eagle',
    short_name: 'EGBN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '570',
    name: 'Eagle Bulk Shipping',
    short_name: 'EGLE',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '571',
    name: 'NIC',
    short_name: 'EGOV',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '572',
    name: 'eHealth',
    short_name: 'EHTH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '573',
    name: 'Endologix',
    short_name: 'ELGXQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '574',
    name: 'Electro-Sensors',
    short_name: 'ELSE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '575',
    name: 'Eltek',
    short_name: 'ELTK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '576',
    name: 'Emclaire',
    short_name: 'EMCF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '577',
    name: 'EMCORE',
    short_name: 'EMKR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '578',
    name: 'Eastern Co',
    short_name: 'EML',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '579',
    name: 'Emmis Comm',
    short_name: 'EMMS',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '580',
    name: 'Endo Int',
    short_name: 'ENDP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '581',
    name: 'ENGlobal',
    short_name: 'ENG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '582',
    name: 'The Ensign',
    short_name: 'ENSG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '583',
    name: 'Bottomline',
    short_name: 'EPAY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '584',
    name: 'Erie Indemnity',
    short_name: 'ERIE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '585',
    name: 'Energy Recovery',
    short_name: 'ERII',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '586',
    name: 'Elmira Savings Bank',
    short_name: 'ESBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '587',
    name: 'Escalade',
    short_name: 'ESCA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '588',
    name: 'Euroseas',
    short_name: 'ESEA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '589',
    name: 'Enstar',
    short_name: 'ESGR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '590',
    name: 'ESSA Bancorp',
    short_name: 'ESSA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '591',
    name: 'Symbolic Logic',
    short_name: 'EVOL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '592',
    name: 'East West Bancorp',
    short_name: 'EWBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '593',
    name: 'EXACT Sciences',
    short_name: 'EXAS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '594',
    name: 'EXFO',
    short_name: 'EXFO',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '595',
    name: 'ExlServices',
    short_name: 'EXLS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '596',
    name: 'Exponent',
    short_name: 'EXPO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '597',
    name: 'EZCORP',
    short_name: 'EZPW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '598',
    name: 'Farmer Bros. Co',
    short_name: 'FARM',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '599',
    name: 'FARO',
    short_name: 'FARO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '600',
    name: 'First Business',
    short_name: 'FBIZ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '601',
    name: 'The First Bancshares',
    short_name: 'FBMS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '602',
    name: 'First Bancorp',
    short_name: 'FBNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '603',
    name: 'Fauquier',
    short_name: 'FBSS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '604',
    name: 'First Capital',
    short_name: 'FCAP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '605',
    name: 'First Community Bancshares',
    short_name: 'FCBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '606',
    name: 'First Community',
    short_name: 'FCCO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '607',
    name: '1st Constitution Bancorp',
    short_name: 'FCCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '608',
    name: 'FuelCell Energy',
    short_name: 'FCEL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '609',
    name: 'FirstCash',
    short_name: 'FCFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '610',
    name: 'First Citizens BancShares',
    short_name: 'FCNCA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '611',
    name: 'Civista Bancshares',
    short_name: 'CIVB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '612',
    name: 'Premier Financial',
    short_name: 'PFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '613',
    name: 'Frequency Electronics',
    short_name: 'FEIM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '614',
    name: 'Franklin Electric',
    short_name: 'FELE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '615',
    name: 'First Financial Bancorp',
    short_name: 'FFBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '616',
    name: 'Fuwei Films Holdings',
    short_name: 'FFHL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '617',
    name: 'Flushing',
    short_name: 'FFIC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '618',
    name: 'First Financial Bankshares',
    short_name: 'FFIN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '619',
    name: 'First Financial Northwest',
    short_name: 'FFNW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '620',
    name: 'Veru',
    short_name: 'VERU',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '621',
    name: 'First Interstate BancSystem',
    short_name: 'FIBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '622',
    name: 'Financial Institutions',
    short_name: 'FISI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '623',
    name: 'National Beverage',
    short_name: 'FIZZ',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '624',
    name: 'Standard Biotools',
    short_name: 'FLDM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '625',
    name: 'First of Long Island',
    short_name: 'FLIC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '626',
    name: 'Avadel Pharma',
    short_name: 'AVDL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '627',
    name: '1-800 FLOWERS.COM',
    short_name: 'FLWS',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '628',
    name: 'Flexsteel',
    short_name: 'FLXS',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '629',
    name: 'First Midwest',
    short_name: 'FMBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '630',
    name: 'Farmers National',
    short_name: 'FMNB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '631',
    name: 'First Bancorp Inc',
    short_name: 'FNLC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '632',
    name: 'Amicus',
    short_name: 'FOLD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '633',
    name: 'Fonar',
    short_name: 'FONR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '634',
    name: 'Forward Industries',
    short_name: 'FORD',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '635',
    name: 'FormFactor',
    short_name: 'FORM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '636',
    name: 'Forrester',
    short_name: 'FORR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '637',
    name: 'Formula Systems ADR',
    short_name: 'FORTY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '638',
    name: 'Francescass',
    short_name: 'FRAN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '639',
    name: 'Republic First Bancorp',
    short_name: 'FRBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '640',
    name: 'First Merchants',
    short_name: 'FRME',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '641',
    name: 'Franklin Financial',
    short_name: 'FRAF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '642',
    name: 'First Savings',
    short_name: 'FSFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '643',
    name: 'Colliers International',
    short_name: 'CIGI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '644',
    name: 'LB Foster',
    short_name: 'FSTR',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '645',
    name: 'Fuel Tech',
    short_name: 'FTEK',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '646',
    name: 'Fortinet',
    short_name: 'FTNT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '647',
    name: 'Fulton',
    short_name: 'FULT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '648',
    name: 'First United',
    short_name: 'FUNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '649',
    name: 'Forward Air',
    short_name: 'FWRD',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '650',
    name: 'German American Bancorp',
    short_name: 'GABC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '651',
    name: 'Gaia Inc',
    short_name: 'GAIA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '652',
    name: 'Sellas Life Sciences',
    short_name: 'SLS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '653',
    name: 'StealthGas',
    short_name: 'GASS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '654',
    name: 'Glacier',
    short_name: 'GBCI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '655',
    name: 'Global Indemnity',
    short_name: 'GBLI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '656',
    name: 'Greene County',
    short_name: 'GCBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '657',
    name: 'Gencor',
    short_name: 'GENC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '658',
    name: 'Genetic Technologies',
    short_name: 'GENE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '659',
    name: 'Geron',
    short_name: 'GERN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '660',
    name: 'Gevo',
    short_name: 'GEVO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '661',
    name: 'Guaranty Federal',
    short_name: 'GFED',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '662',
    name: 'General Finance',
    short_name: 'GFN',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '663',
    name: 'Genomic',
    short_name: 'GHDX_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '664',
    name: 'Gulf Island Fabrication',
    short_name: 'GIFI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '665',
    name: 'Giga Media Ltd',
    short_name: 'GIGM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '666',
    name: 'G-III Apparel',
    short_name: 'GIII',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '667',
    name: 'Gilat',
    short_name: 'GILT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '668',
    name: 'Globus Maritime',
    short_name: 'GLBS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '669',
    name: 'Glen Burnie',
    short_name: 'GLBZ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '670',
    name: 'Great Lakes Dredge&Dock',
    short_name: 'GLDD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '671',
    name: 'Golar',
    short_name: 'GLNG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '672',
    name: 'Greenlight Capital Re',
    short_name: 'GLRE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '673',
    name: 'Glu Mobile',
    short_name: 'GLUU',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '674',
    name: 'Golar LNG Partners LP',
    short_name: 'GMLP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '675',
    name: 'GenMark',
    short_name: 'GNMK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '676',
    name: 'Gentex',
    short_name: 'GNTX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '677',
    name: 'Gladstone Commercial',
    short_name: 'GOOD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '678',
    name: 'Green Plains Energy',
    short_name: 'GPRE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '679',
    name: 'Grifols ADR',
    short_name: 'GRFS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '680',
    name: 'Indus Realty Trust',
    short_name: 'INDT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '681',
    name: 'US Global',
    short_name: 'GROW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '682',
    name: 'Gravity Co',
    short_name: 'GRVY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '683',
    name: 'Great Southern Bancorp',
    short_name: 'GSBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '684',
    name: 'Novanta',
    short_name: 'NOVT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '685',
    name: 'GSI Technology',
    short_name: 'GSIT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '686',
    name: 'CSI Compressco',
    short_name: 'CCLP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '687',
    name: 'Ferroglobe',
    short_name: 'GSM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '688',
    name: 'Good Times',
    short_name: 'GTIM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '689',
    name: 'Chart Industries',
    short_name: 'GTLS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '690',
    name: 'GTX Inc',
    short_name: 'ONCT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '691',
    name: 'Gulf Resources',
    short_name: 'GURE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '692',
    name: 'Gyrodyne of America',
    short_name: 'GYRO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '693',
    name: 'Hawaiian',
    short_name: 'HA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '694',
    name: 'Hanmi',
    short_name: 'HAFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '695',
    name: 'Hallmark',
    short_name: 'HALL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '696',
    name: 'Halozyme',
    short_name: 'HALO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '697',
    name: 'Haynes',
    short_name: 'HAYN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '698',
    name: 'Home Bancorp',
    short_name: 'HBCP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '699',
    name: 'Hancock Whitney',
    short_name: 'HWC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '700',
    name: 'Harvard Bioscience',
    short_name: 'HBIO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '701',
    name: 'Horizon Bancorp',
    short_name: 'HBNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '702',
    name: 'Heritage-Crystal Clean',
    short_name: 'HCCI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '703',
    name: 'The Hackett',
    short_name: 'HCKT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '704',
    name: 'Healthcare Services',
    short_name: 'HCSG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '705',
    name: 'Hudson',
    short_name: 'HDSN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '706',
    name: 'H&E Equipment',
    short_name: 'HEES',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '707',
    name: 'Helen of Troy Ltd',
    short_name: 'HELE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '708',
    name: 'Home Federal Louisiana',
    short_name: 'HFBL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '709',
    name: 'Heritage Financial Co',
    short_name: 'HFWA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '710',
    name: 'Green Giant',
    short_name: 'HGSH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '711',
    name: 'Hudson Global Inc',
    short_name: 'HSON',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '712',
    name: 'Hibbett Sports',
    short_name: 'HIBB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '713',
    name: 'Hingham Institution',
    short_name: 'HIFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '714',
    name: 'Highways',
    short_name: 'HIHO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '715',
    name: 'Himax',
    short_name: 'HIMX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '716',
    name: 'Harmonic',
    short_name: 'HLIT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '717',
    name: 'HMN Financial',
    short_name: 'HMNF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '718',
    name: 'HMS Holdings',
    short_name: 'HMSY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '719',
    name: 'Hallador',
    short_name: 'HNRG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '720',
    name: 'Hooker Furniture',
    short_name: 'HOFT',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '721',
    name: 'Hollysys Automation Tech',
    short_name: 'HOLI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '722',
    name: 'Home BancShares',
    short_name: 'HOMB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '723',
    name: 'Craft Brew',
    short_name: 'BREW',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '724',
    name: 'Hong Kong Highpower',
    short_name: 'HPJ_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '725',
    name: 'Horizon Finance',
    short_name: 'HRZN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '726',
    name: 'Heidrick&Struggles',
    short_name: 'HSII',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '727',
    name: 'Heska',
    short_name: 'HSKA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '728',
    name: 'HealthStream',
    short_name: 'HSTM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '729',
    name: 'Remark',
    short_name: 'MARK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '730',
    name: 'Heritage Commerce',
    short_name: 'HTBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '731',
    name: 'Huazhu',
    short_name: 'HTHT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '732',
    name: 'Heartland Express',
    short_name: 'HTLD',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '733',
    name: 'Heartland Financial',
    short_name: 'HTLF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '734',
    name: 'Hub Group',
    short_name: 'HUBG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '735',
    name: 'Hurco',
    short_name: 'HURC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '736',
    name: 'Huron',
    short_name: 'HURN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '737',
    name: 'Tivity Health',
    short_name: 'TVTY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '738',
    name: 'Hawthorn Bancshares',
    short_name: 'HWBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '739',
    name: 'Houston Wire&Cable',
    short_name: 'HWCC',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '740',
    name: 'Hawkins',
    short_name: 'HWKN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '741',
    name: 'Horizon Pharma',
    short_name: 'HZNP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '742',
    name: 'Integra',
    short_name: 'IART',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '743',
    name: 'Independent Bank Corp',
    short_name: 'IBCP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '744',
    name: 'IBERIABANK',
    short_name: 'IBKC_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '745',
    name: 'Interactive Brokers',
    short_name: 'IBKR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '746',
    name: 'International Bancshares',
    short_name: 'IBOC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '747',
    name: 'icad',
    short_name: 'ICAD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '748',
    name: 'ImmuCell',
    short_name: 'ICCC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '749',
    name: 'ICF International',
    short_name: 'ICFI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '750',
    name: 'ICON PLC',
    short_name: 'ICLR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '751',
    name: 'ICU Medical',
    short_name: 'ICUI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '752',
    name: 'InterDigital',
    short_name: 'IDCC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '753',
    name: 'Idera Pharma',
    short_name: 'IDRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '754',
    name: 'Industrial Services',
    short_name: 'IDSA_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '755',
    name: 'ID Systems',
    short_name: 'PWFL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '756',
    name: 'Icahn Enterprises',
    short_name: 'IEP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '757',
    name: 'IES Holdings',
    short_name: 'IESC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '758',
    name: 'Simply',
    short_name: 'SIMP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '759',
    name: 'Interface',
    short_name: 'TILE',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '760',
    name: 'Internet Gold',
    short_name: 'IGLDF',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '761',
    name: 'Information Services',
    short_name: 'III',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '762',
    name: 'Insteel Industries',
    short_name: 'IIIN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '763',
    name: 'IntriCon',
    short_name: 'IIN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '764',
    name: 'II-VI',
    short_name: 'IIVI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '765',
    name: 'Terawulf',
    short_name: 'IKNX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '766',
    name: 'ImmunoGen',
    short_name: 'IMGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '767',
    name: 'Ingles',
    short_name: 'IMKTA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '768',
    name: 'Immersion Corp',
    short_name: 'IMMR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '769',
    name: 'Immunomedics',
    short_name: 'IMMU',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '770',
    name: 'ChipMOS Tech',
    short_name: 'IMOS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '771',
    name: 'Internap',
    short_name: 'INAPQ',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '772',
    name: 'Independent Bank',
    short_name: 'INDB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '773',
    name: 'Infinity',
    short_name: 'INFI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '774',
    name: 'Infinera',
    short_name: 'INFN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '775',
    name: 'Innodata',
    short_name: 'INOD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '776',
    name: 'Insmed',
    short_name: 'INSM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '777',
    name: 'The Intergroup',
    short_name: 'INTG',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '778',
    name: 'INTL FCStone',
    short_name: 'SNEX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '779',
    name: 'Identiv',
    short_name: 'INVE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '780',
    name: 'InnerWorkings',
    short_name: 'INWK',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '781',
    name: 'Innospec',
    short_name: 'IOSP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '782',
    name: 'Inter Parfums',
    short_name: 'IPAR',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '783',
    name: 'Innophoss',
    short_name: 'IPHS_old',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '784',
    name: 'iRobot',
    short_name: 'IRBT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '785',
    name: 'Iridium',
    short_name: 'IRDM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '786',
    name: 'IRIDEX',
    short_name: 'IRIX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '787',
    name: 'IF Bancorp',
    short_name: 'IROQ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '788',
    name: 'Ironwood',
    short_name: 'IRWD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '789',
    name: 'Investors Bancorp',
    short_name: 'ISBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '790',
    name: 'International Speedway',
    short_name: 'ISCA_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '791',
    name: 'Insignia',
    short_name: 'ISIG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '792',
    name: 'Autoscope Technologies',
    short_name: 'AATC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '793',
    name: 'Isramco',
    short_name: 'ISRL_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '794',
    name: 'Innovative Solutions',
    short_name: 'ISSC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '795',
    name: 'Investors Title',
    short_name: 'ITIC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '796',
    name: 'Ituran',
    short_name: 'ITRN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '797',
    name: 'Intevac',
    short_name: 'IVAC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '798',
    name: 'Jack In The Box',
    short_name: 'JACK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '799',
    name: 'JAKKS Pacific',
    short_name: 'JAKK',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '800',
    name: 'Jazz Pharma',
    short_name: 'JAZZ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '801',
    name: 'John B Sanfilippo&Son',
    short_name: 'JBSS',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '802',
    name: 'Ziff Davis',
    short_name: 'JCOM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '803',
    name: 'Pineapple Holdings',
    short_name: 'JCS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '804',
    name: 'Jewett-Cameron Trading',
    short_name: 'JCTCF',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '805',
    name: 'J & J Snack Foods',
    short_name: 'JJSF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '806',
    name: 'Jack Henry&Associates',
    short_name: 'JKHY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '807',
    name: '51job',
    short_name: 'JOBS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '808',
    name: 'Centric Brands',
    short_name: 'CTRCQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '809',
    name: 'Johnson Outdoors',
    short_name: 'JOUT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '810',
    name: 'China Finance',
    short_name: 'JRJC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '811',
    name: 'Coffee Holding',
    short_name: 'JVA',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '812',
    name: 'Kaiser',
    short_name: 'KALU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '813',
    name: 'Kimball',
    short_name: 'KBAL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '814',
    name: 'Kelly Services A',
    short_name: 'KELYA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '815',
    name: 'Kelly Services B',
    short_name: 'KELYB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '816',
    name: 'Kewaunee',
    short_name: 'KEQU',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '817',
    name: 'Kentucky First Federal',
    short_name: 'KFFB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '818',
    name: 'Simply Good Foods',
    short_name: 'SMPL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '819',
    name: 'Kforce',
    short_name: 'KFRC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '820',
    name: 'Kingold',
    short_name: 'KGJI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '821',
    name: 'Kingstone',
    short_name: 'KINS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '822',
    name: 'Kirklands',
    short_name: 'KIRK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '823',
    name: 'Kulicke&Soffa',
    short_name: 'KLIC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '824',
    name: 'Kandi',
    short_name: 'KNDI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '825',
    name: 'Luokung Tech',
    short_name: 'LKCO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '826',
    name: 'Thermogenesis Holdings',
    short_name: 'THMO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '827',
    name: 'Kopin',
    short_name: 'KOPN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '828',
    name: 'Koss',
    short_name: 'KOSS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '829',
    name: 'Kearny Financial',
    short_name: 'KRNY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '830',
    name: 'Key Tronic',
    short_name: 'KTCC',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '831',
    name: 'Kratos Defense&Security',
    short_name: 'KTOS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '832',
    name: 'KVH Industries',
    short_name: 'KVHI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '833',
    name: 'Golden Entertainment',
    short_name: 'GDEN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '834',
    name: 'Lakeland Industries',
    short_name: 'LAKE',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '835',
    name: 'Lancaster Colony',
    short_name: 'LANC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '836',
    name: 'Landmark',
    short_name: 'LARK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '837',
    name: 'Distribution Solutions',
    short_name: 'LAWS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '838',
    name: 'Lakeland Bancorp',
    short_name: 'LBAI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '839',
    name: 'Liquid Media',
    short_name: 'YVR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '840',
    name: 'Liberty Global B',
    short_name: 'LBTYB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '841',
    name: 'LCNB',
    short_name: 'LCNB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '842',
    name: 'Lifetime Brands',
    short_name: 'LCUT',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '843',
    name: 'SemiLEDS',
    short_name: 'LEDS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '844',
    name: 'Littelfuse',
    short_name: 'LFUS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '845',
    name: 'Ligand',
    short_name: 'LGND',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '846',
    name: 'LHC Group',
    short_name: 'LHCG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '847',
    name: 'Lincoln Educational',
    short_name: 'LINC',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '848',
    name: 'Qurate Retail B',
    short_name: 'QRTEB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '849',
    name: 'Live Ventures',
    short_name: 'LIVE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '850',
    name: 'Lakeland Financial',
    short_name: 'LKFN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '851',
    name: 'Limelight',
    short_name: 'LLNW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '852',
    name: 'Liberty Media Formula A',
    short_name: 'FWONA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '853',
    name: 'Limoneira',
    short_name: 'LMNR',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '854',
    name: 'Luminex',
    short_name: 'LMNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '855',
    name: 'Landec',
    short_name: 'LNDC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '856',
    name: 'Manhattan Bridge',
    short_name: 'LOAN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '857',
    name: 'LogMeIn',
    short_name: 'LOGM',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '858',
    name: 'Loop Industries',
    short_name: 'LOOP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '859',
    name: 'Grand Canyon Education',
    short_name: 'LOPE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '860',
    name: 'Telesat',
    short_name: 'LORL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '861',
    name: 'LPL Financial',
    short_name: 'LPLA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '862',
    name: 'LivePerson',
    short_name: 'LPSN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '863',
    name: 'LightPath',
    short_name: 'LPTH',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '864',
    name: 'Liquidity Services',
    short_name: 'LQDT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '865',
    name: 'Genasys Inc',
    short_name: 'GNSS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '866',
    name: 'Lake Shore Bancorp',
    short_name: 'LSBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '867',
    name: 'Lattice',
    short_name: 'LSCC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '868',
    name: 'Landstar',
    short_name: 'LSTR',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '869',
    name: 'Lightbridge',
    short_name: 'LTBR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '870',
    name: 'Lantronix',
    short_name: 'LTRX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '871',
    name: 'Luna',
    short_name: 'LUNA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '872',
    name: 'Lifeway',
    short_name: 'LWAY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '873',
    name: 'Lexicon',
    short_name: 'LXRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '874',
    name: 'LSI Industries',
    short_name: 'LYTS',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '875',
    name: 'Senstar Technologies',
    short_name: 'MAGS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '876',
    name: 'Manhattan Associates',
    short_name: 'MANH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '877',
    name: 'Marine Petroleum',
    short_name: 'MARPS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '878',
    name: 'Masimo',
    short_name: 'MASI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '879',
    name: 'Matthews',
    short_name: 'MATW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '880',
    name: 'J W Mays',
    short_name: 'MAYS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '881',
    name: 'Mercantile',
    short_name: 'MBWM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '882',
    name: 'Macatawa Bank',
    short_name: 'MCBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '883',
    name: 'Mid-Con',
    short_name: 'MCEP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '884',
    name: 'Marchex',
    short_name: 'MCHX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '885',
    name: 'Monarch',
    short_name: 'MCRI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '886',
    name: 'Stagwell',
    short_name: 'STGW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '887',
    name: 'The Medicines',
    short_name: 'MDCO_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '888',
    name: 'Sotherly Hotels',
    short_name: 'SOHO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '889',
    name: 'Medidata',
    short_name: 'MDSO_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '890',
    name: 'STRATA Skin Sciences',
    short_name: 'SSKN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '891',
    name: 'Methanex',
    short_name: 'MEOH',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '892',
    name: 'Mercer Int',
    short_name: 'MERC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '893',
    name: 'Mackinac',
    short_name: 'MFNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '894',
    name: 'Perma-Pipe Int',
    short_name: 'PPIH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '895',
    name: 'MutualFirst',
    short_name: 'MFSF_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '896',
    name: 'MGE Energy',
    short_name: 'MGEE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '897',
    name: 'Magic',
    short_name: 'MGIC',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '898',
    name: 'Magellan Health',
    short_name: 'MGLN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '899',
    name: 'MGP Ingredients',
    short_name: 'MGPI',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '900',
    name: 'McGrath',
    short_name: 'MGRC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '901',
    name: 'Magyar',
    short_name: 'MGYR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '902',
    name: 'Maiden Holdings',
    short_name: 'MHLD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '903',
    name: 'Mind Technology',
    short_name: 'MIND',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '904',
    name: 'Mobile Mini',
    short_name: 'MINI_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '905',
    name: 'Mitek',
    short_name: 'MITK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '906',
    name: 'MKS Instruments',
    short_name: 'MKSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '907',
    name: 'MarketAxesss',
    short_name: 'MKTX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '908',
    name: 'Mesa Labs',
    short_name: 'MLAB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '909',
    name: 'MillerKnoll',
    short_name: 'MLHR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '910',
    name: 'Steel Connect',
    short_name: 'STCN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '911',
    name: 'Malvern',
    short_name: 'MLVF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '912',
    name: 'Martin Midstream',
    short_name: 'MMLP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '913',
    name: 'Merit',
    short_name: 'MMSI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '914',
    name: 'MakeMyTrip',
    short_name: 'MMYT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '915',
    name: 'MIND CTI',
    short_name: 'MNDO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '916',
    name: 'MannKind',
    short_name: 'MNKD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '917',
    name: 'MediciNova',
    short_name: 'MNOV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '918',
    name: 'Monro Muffler Brake',
    short_name: 'MNRO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '919',
    name: 'Momenta',
    short_name: 'MNTA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '920',
    name: 'Manitex',
    short_name: 'MNTX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '921',
    name: 'MidWestOne',
    short_name: 'MOFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '922',
    name: 'Morningstar',
    short_name: 'MORN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '923',
    name: 'Peraso',
    short_name: 'MOSY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '924',
    name: 'US Well Services',
    short_name: 'USWS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '925',
    name: 'Mid Penn',
    short_name: 'MPB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '926',
    name: 'Tellurian',
    short_name: 'TELL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '927',
    name: 'Monolithic',
    short_name: 'MPWR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '928',
    name: 'Mercury',
    short_name: 'MRCY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '929',
    name: 'Marlin Business',
    short_name: 'MRLN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '930',
    name: 'Marten Transport',
    short_name: 'MRTN',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '931',
    name: 'MSB Financial',
    short_name: 'MSBF_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '932',
    name: 'Middlesex Water',
    short_name: 'MSEX',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '933',
    name: 'MISONIX',
    short_name: 'MSON',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '934',
    name: 'MicroStrategy',
    short_name: 'MSTR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '935',
    name: 'Mannatech',
    short_name: 'MTEX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '936',
    name: 'Matrix',
    short_name: 'MTRX',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '937',
    name: 'MTS Systems',
    short_name: 'MTSC',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '938',
    name: 'Sharplink Gaming',
    short_name: 'SBET',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '939',
    name: 'Microvision',
    short_name: 'MVIS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '940',
    name: 'Myriad Genetics',
    short_name: 'MYGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '941',
    name: 'MYR Group',
    short_name: 'MYRG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '942',
    name: 'Vaxart',
    short_name: 'VXRT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '943',
    name: 'Natural Alternatives',
    short_name: 'NAII',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '944',
    name: 'Onto Innovation',
    short_name: 'ONTO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '945',
    name: 'Nathans Famous',
    short_name: 'NATH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '946',
    name: 'National Instruments',
    short_name: 'NATI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '947',
    name: 'Natures Sunshine',
    short_name: 'NATR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '948',
    name: 'Neurocrine',
    short_name: 'NBIX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '949',
    name: 'Northeast Bancorp',
    short_name: 'NBN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '950',
    name: 'NBT Bancorp',
    short_name: 'NBTB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '951',
    name: 'Select Bancorp',
    short_name: 'SLCT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '952',
    name: 'National CineMedia',
    short_name: 'NCMI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '953',
    name: 'The9 ADR',
    short_name: 'NCTY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '954',
    name: 'Nordson',
    short_name: 'NDSN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '955',
    name: 'Neogen',
    short_name: 'NEOG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '956',
    name: 'Neptune Wellness Solutions',
    short_name: 'NEPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '957',
    name: 'Newtek',
    short_name: 'NEWT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '958',
    name: 'Northfield Bancorp',
    short_name: 'NFBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '959',
    name: 'Bimi International Medical',
    short_name: 'BIMI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '960',
    name: 'Nice ADR',
    short_name: 'NICE',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '961',
    name: 'Nicholas Financial',
    short_name: 'NICK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '962',
    name: 'National Bankshares',
    short_name: 'NKSH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '963',
    name: 'Nektar',
    short_name: 'NKTR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '964',
    name: 'Lumos Pharma Inc',
    short_name: 'LUMO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '965',
    name: 'NN Inc',
    short_name: 'NNBR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '966',
    name: 'Northrim',
    short_name: 'NRIM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '967',
    name: 'National Security',
    short_name: 'NSEC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '968',
    name: 'Insight Enterprises',
    short_name: 'NSIT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '969',
    name: 'NAPCO',
    short_name: 'NSSC',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '970',
    name: 'Nortech',
    short_name: 'NSYS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '971',
    name: 'NetScout',
    short_name: 'NTCT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '972',
    name: 'NETGEAR',
    short_name: 'NTGR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '973',
    name: 'Northern Technologies',
    short_name: 'NTIC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '974',
    name: 'NetSol',
    short_name: 'NTWK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '975',
    name: 'NeuroMetrix',
    short_name: 'NURO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '976',
    name: 'NuVasive',
    short_name: 'NUVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '977',
    name: 'Novavax',
    short_name: 'NVAX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '978',
    name: 'NVE Corporation',
    short_name: 'NVEC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '979',
    name: 'Kazia Therapeutics ADR',
    short_name: 'KZIA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '980',
    name: 'Nova',
    short_name: 'NVMI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '981',
    name: 'Inseego',
    short_name: 'INSG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '982',
    name: 'Northwest Bancshares',
    short_name: 'NWBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '983',
    name: 'Norwood',
    short_name: 'NWFL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '984',
    name: 'National Western Life Insurance',
    short_name: 'NWLI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '985',
    name: 'Northwest Pipe',
    short_name: 'NWPX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '986',
    name: 'Nexstar',
    short_name: 'NXST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '987',
    name: 'New York Mortgage',
    short_name: 'NYMT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '988',
    name: 'Nymox Pharmaceutical',
    short_name: 'NYMX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '989',
    name: 'Empire Resorts',
    short_name: 'NYNY_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '990',
    name: 'Optibase',
    short_name: 'OBAS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '991',
    name: 'Ocean Bio-Chem',
    short_name: 'OBCI',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '992',
    name: 'Optical Cable',
    short_name: 'OCC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '993',
    name: 'OceanFirst',
    short_name: 'OCFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '994',
    name: 'Sonoma Pharma',
    short_name: 'SNOA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '995',
    name: 'Oconee',
    short_name: 'OFED',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '996',
    name: 'Orthofix',
    short_name: 'OFIX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '997',
    name: 'Omega Flex',
    short_name: 'OFLX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '998',
    name: 'Achieve Life Sciences',
    short_name: 'ACHV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '999',
    name: 'O2Micro',
    short_name: 'OIIM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1000',
    name: 'Old Line',
    short_name: 'OLBK_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1001',
    name: 'Aeroportuario del Centro Norte',
    short_name: 'OMAB',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1002',
    name: 'Omnicell',
    short_name: 'OMCL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1003',
    name: 'Omeros',
    short_name: 'OMER',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1004',
    name: 'Odyssey',
    short_name: 'OMEX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1005',
    name: 'Oncolytics Biotech',
    short_name: 'ONCY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1006',
    name: 'ON Semiconductor',
    short_name: 'ON',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1007',
    name: 'OptimumBank Holdings',
    short_name: 'OPHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1008',
    name: 'Old Point',
    short_name: 'OPOF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1009',
    name: 'Ocean Power',
    short_name: 'OPTT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1010',
    name: 'Great Elm Group',
    short_name: 'GEG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1011',
    name: 'Acer Therapeutics',
    short_name: 'ACER',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1012',
    name: 'ORBCOMM',
    short_name: 'ORBC',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1013',
    name: 'Oritani',
    short_name: 'ORIT_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1014',
    name: 'Orrstown',
    short_name: 'ORRF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1015',
    name: 'Old Second Bancorp',
    short_name: 'OSBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1016',
    name: 'OSI Systems',
    short_name: 'OSIS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1017',
    name: 'Ossen Innovation',
    short_name: 'OSN',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1018',
    name: 'Overstockcom',
    short_name: 'OSTK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1019',
    name: 'OraSure',
    short_name: 'OSUR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1020',
    name: 'Open Text',
    short_name: 'OTEX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1021',
    name: 'On Track',
    short_name: 'OTIVF',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '1022',
    name: 'Otter Tail',
    short_name: 'OTTR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1023',
    name: 'Ohio Valley Banc',
    short_name: 'OVBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1024',
    name: 'Oak Valley Bancorp',
    short_name: 'OVLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1025',
    name: 'Tenax Therapeutics',
    short_name: 'TENX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1026',
    name: 'Geospace',
    short_name: 'GEOS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1027',
    name: 'Bank Ozk',
    short_name: 'OZK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1028',
    name: 'Pacific Biosciences',
    short_name: 'PACB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1029',
    name: 'Highpeak Energy Acquisition',
    short_name: 'HPK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1030',
    name: 'PacWest',
    short_name: 'PACW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1031',
    name: 'Universal Display',
    short_name: 'OLED',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1032',
    name: 'Patrick',
    short_name: 'PATK',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1033',
    name: 'Frp Holdings Ord',
    short_name: 'FRPH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1034',
    name: 'Pathfinder Bancorp',
    short_name: 'PBHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1035',
    name: 'Porter Bancorp',
    short_name: 'LMST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1036',
    name: 'Prudential Pennsylvania',
    short_name: 'PBIP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1037',
    name: 'PC Connection',
    short_name: 'CNXN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1038',
    name: 'PotlatchDeltic',
    short_name: 'PCH',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1039',
    name: 'Points International',
    short_name: 'PCOM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1040',
    name: 'Pacira',
    short_name: 'PCRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1041',
    name: 'PC-Tel',
    short_name: 'PCTI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1042',
    name: 'Pure Cycle',
    short_name: 'PCYO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1043',
    name: 'Pro-Dex',
    short_name: 'PDEX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1044',
    name: 'PDF Solutions',
    short_name: 'PDFS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1045',
    name: 'Interpace Biosciences',
    short_name: 'IDXG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '1046',
    name: 'Peoples North Carolina',
    short_name: 'PEBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1047',
    name: 'Pegasystems',
    short_name: 'PEGA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1048',
    name: 'Alto Ingredients',
    short_name: 'ALTO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1134',
    name: 'General Motors',
    short_name: 'GM',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1135',
    name: 'Citigroup',
    short_name: 'C',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1136',
    name: 'Bank of America',
    short_name: 'BAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1137',
    name: 'AT&T',
    short_name: 'T',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1138',
    name: 'Ford Motor',
    short_name: 'F',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1139',
    name: 'Deere&Company',
    short_name: 'DE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1140',
    name: 'FedEx',
    short_name: 'FDX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1141',
    name: 'General Mills',
    short_name: 'GIS',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1142',
    name: 'Corning',
    short_name: 'GLW',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1143',
    name: 'Kimberly-Clark',
    short_name: 'KMB',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1144',
    name: 'Eli Lilly',
    short_name: 'LLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1145',
    name: 'Oracle',
    short_name: 'ORCL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1146',
    name: 'Motorola',
    short_name: 'MSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1147',
    name: 'Juniper',
    short_name: 'JNPR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1148',
    name: 'Charles Schwab',
    short_name: 'SCHW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1149',
    name: 'Medtronic',
    short_name: 'MDT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1150',
    name: 'Dover',
    short_name: 'DOV',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1151',
    name: 'Northrop Grumman',
    short_name: 'NOC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1152',
    name: 'MGM',
    short_name: 'MGM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1153',
    name: 'Vornado',
    short_name: 'VNO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1154',
    name: 'Mastercard',
    short_name: 'MA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1155',
    name: 'General Dynamics',
    short_name: 'GD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1156',
    name: 'DTE Energy',
    short_name: 'DTE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1157',
    name: 'VF',
    short_name: 'VFC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1158',
    name: 'Allergan',
    short_name: 'AGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1159',
    name: 'Cardinal Health',
    short_name: 'CAH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1160',
    name: 'DR Horton',
    short_name: 'DHI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1161',
    name: 'IPG',
    short_name: 'IPG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1162',
    name: 'SunTrust Banks',
    short_name: 'STI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1163',
    name: 'Lockheed Martin',
    short_name: 'LMT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1164',
    name: 'Waters',
    short_name: 'WAT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1165',
    name: 'Accenture',
    short_name: 'ACN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1166',
    name: 'Dominion Energy',
    short_name: 'D',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1167',
    name: 'Cigna',
    short_name: 'CI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1168',
    name: 'Public Service Enterprise',
    short_name: 'PEG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1169',
    name: 'NiSource',
    short_name: 'NI',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1170',
    name: 'Zimmer Biomet',
    short_name: 'ZBH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1171',
    name: 'ICE',
    short_name: 'ICE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1172',
    name: 'Southwest Airlines',
    short_name: 'LUV',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1173',
    name: 'Illinois Tool Works',
    short_name: 'ITW',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1174',
    name: 'Darden Restaurants',
    short_name: 'DRI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1175',
    name: 'Truist Financial Corp',
    short_name: 'TFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1176',
    name: 'Halliburton',
    short_name: 'HAL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1177',
    name: 'Prologis',
    short_name: 'PLD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1178',
    name: 'McCormick&Co',
    short_name: 'MKC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1179',
    name: 'Gap',
    short_name: 'GPS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1180',
    name: 'Host Hotels Resorts',
    short_name: 'HST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1181',
    name: 'Estee Lauder',
    short_name: 'EL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1182',
    name: 'International Paper',
    short_name: 'IP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1183',
    name: 'Emerson',
    short_name: 'EMR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1184',
    name: 'Clorox',
    short_name: 'CLX',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1185',
    name: 'ConocoPhillips',
    short_name: 'COP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1186',
    name: 'Colgate-Palmolive',
    short_name: 'CL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1187',
    name: 'Raytheon',
    short_name: 'RTN',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1188',
    name: 'Pinnacle West',
    short_name: 'PNW',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1189',
    name: 'Regions Financial',
    short_name: 'RF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1190',
    name: 'CenterPoint Energy',
    short_name: 'CNP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1191',
    name: 'MetLife',
    short_name: 'MET',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1192',
    name: 'Baxter',
    short_name: 'BAX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1193',
    name: 'Occidental',
    short_name: 'OXY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1194',
    name: 'Southern',
    short_name: 'SO',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1195',
    name: 'Tapestry',
    short_name: 'TPR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1196',
    name: 'Lennar',
    short_name: 'LEN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1197',
    name: 'Campbell Soup',
    short_name: 'CPB',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1198',
    name: 'Lumen Technologies',
    short_name: 'LUMN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1199',
    name: 'State Street',
    short_name: 'STT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1200',
    name: 'Progressive',
    short_name: 'PGR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1201',
    name: 'Vulcan Materials',
    short_name: 'VMC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1202',
    name: 'Parker-Hannifin',
    short_name: 'PH',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1203',
    name: 'Genuine Parts',
    short_name: 'GPC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1204',
    name: 'CBRE A',
    short_name: 'CBRE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1205',
    name: 'DuPont De Nemours',
    short_name: 'DD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1206',
    name: 'Sherwin-Williams',
    short_name: 'SHW',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1207',
    name: 'Wells Fargo&Co',
    short_name: 'WFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1208',
    name: 'Edison',
    short_name: 'EIX',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1209',
    name: 'Snap-On',
    short_name: 'SNA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1210',
    name: 'Xerox',
    short_name: 'XRX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1211',
    name: 'Equifax',
    short_name: 'EFX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1212',
    name: 'McKesson',
    short_name: 'MCK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1213',
    name: 'Entergy',
    short_name: 'ETR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1214',
    name: 'CMS Energy',
    short_name: 'CMS',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1215',
    name: 'Ameriprise Financial',
    short_name: 'AMP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1216',
    name: 'AIG',
    short_name: 'AIG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1217',
    name: 'Ralph Lauren A',
    short_name: 'RL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1218',
    name: 'Leggett&Platt',
    short_name: 'LEG',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1219',
    name: 'Bath & Body Works',
    short_name: 'BBWI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1220',
    name: 'IFF',
    short_name: 'IFF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1221',
    name: 'WW Grainger',
    short_name: 'GWW',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1222',
    name: 'Constellation Brands A',
    short_name: 'STZ',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1223',
    name: 'American Tower',
    short_name: 'AMT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1224',
    name: 'Philip Morris',
    short_name: 'PM',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1225',
    name: 'Fidelity National Info',
    short_name: 'FIS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1226',
    name: 'Altria',
    short_name: 'MO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1227',
    name: 'CBS',
    short_name: 'CBS_old',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1228',
    name: 'Ball',
    short_name: 'BLL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1229',
    name: 'Hartford',
    short_name: 'HIG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1230',
    name: 'Hershey Co',
    short_name: 'HSY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1231',
    name: 'DXC Technology',
    short_name: 'DXC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1232',
    name: 'Morgan Stanley',
    short_name: 'MS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1233',
    name: 'PNC Financial',
    short_name: 'PNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1234',
    name: 'Waste Management',
    short_name: 'WM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1235',
    name: 'AmerisourceBergen',
    short_name: 'ABC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1236',
    name: 'Assurant',
    short_name: 'AIZ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1237',
    name: 'Kroger',
    short_name: 'KR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1238',
    name: 'Molson Coors Brewing B',
    short_name: 'TAP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1239',
    name: 'Becton Dickinson',
    short_name: 'BDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1240',
    name: 'JM Smucker',
    short_name: 'SJM',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1241',
    name: 'Sealed Air',
    short_name: 'SEE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1242',
    name: 'Best Buy',
    short_name: 'BBY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1243',
    name: 'Archer-Daniels-Midland',
    short_name: 'ADM',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1244',
    name: 'Brown Forman',
    short_name: 'BFb',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1245',
    name: 'Union Pacific',
    short_name: 'UNP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1246',
    name: 'Avery Dennison',
    short_name: 'AVY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1247',
    name: 'Marathon Oil',
    short_name: 'MRO',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1248',
    name: 'CF Industries',
    short_name: 'CF',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1249',
    name: 'APA Corp',
    short_name: 'APA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1250',
    name: 'Duke Energy',
    short_name: 'DUK',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1251',
    name: 'KeyCorp',
    short_name: 'KEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1252',
    name: 'Laboratory America',
    short_name: 'LH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1253',
    name: 'Boston Properties',
    short_name: 'BXP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1254',
    name: 'PPG Industries',
    short_name: 'PPG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1255',
    name: 'S&P Global',
    short_name: 'SPGI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1256',
    name: 'Williams',
    short_name: 'WMB',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1257',
    name: 'Anthem',
    short_name: 'ANTM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1258',
    name: 'Jacobs Engineering',
    short_name: 'J',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1259',
    name: 'Eastman Chemical',
    short_name: 'EMN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1260',
    name: 'Nucor',
    short_name: 'NUE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1261',
    name: 'Omnicom',
    short_name: 'OMC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1262',
    name: 'Lincoln National',
    short_name: 'LNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1263',
    name: 'Nov',
    short_name: 'NOV',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1264',
    name: 'AvalonBay',
    short_name: 'AVB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1265',
    name: 'Ingersoll Rand',
    short_name: 'IR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1266',
    name: 'Bristol-Myers Squibb',
    short_name: 'BMY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1267',
    name: 'American Electric Power',
    short_name: 'AEP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1268',
    name: 'Thermo Fisher Scientific',
    short_name: 'TMO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1269',
    name: 'Kohls Corp',
    short_name: 'KSS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1270',
    name: 'Newmont Goldcorp',
    short_name: 'NEM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1271',
    name: 'Varian',
    short_name: 'VAR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1272',
    name: 'Public Storage',
    short_name: 'PSA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1273',
    name: 'Stanley Black Decker',
    short_name: 'SWK',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1274',
    name: 'Franklin Resources',
    short_name: 'BEN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1275',
    name: 'Humana',
    short_name: 'HUM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1276',
    name: 'H&R Block',
    short_name: 'HRB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1277',
    name: 'Unum',
    short_name: 'UNM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1278',
    name: 'Chubb',
    short_name: 'CB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1279',
    name: 'Jefferies Financial',
    short_name: 'JEF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1280',
    name: 'Tyson Foods',
    short_name: 'TSN',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1281',
    name: 'Target',
    short_name: 'TGT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1282',
    name: 'Masco',
    short_name: 'MAS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1283',
    name: 'Stryker',
    short_name: 'SYK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1284',
    name: 'Discover',
    short_name: 'DFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1285',
    name: 'Prudential Financial',
    short_name: 'PRU',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1286',
    name: 'Abbott Labs',
    short_name: 'ABT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1287',
    name: 'General Electric',
    short_name: 'GE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1288',
    name: 'Quest Diagnostics',
    short_name: 'DGX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1289',
    name: 'United Parcel Service',
    short_name: 'UPS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1290',
    name: 'CVS Health Corp',
    short_name: 'CVS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1291',
    name: 'PPL',
    short_name: 'PPL',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1292',
    name: 'Robert Half',
    short_name: 'RHI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1293',
    name: 'Simon Property',
    short_name: 'SPG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1294',
    name: 'Johnson Controls',
    short_name: 'JCI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1295',
    name: 'Cummins',
    short_name: 'CMI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1296',
    name: 'Allstate',
    short_name: 'ALL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1297',
    name: 'Sempra Energy',
    short_name: 'SRE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1298',
    name: 'Devon Energy',
    short_name: 'DVN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1299',
    name: 'ConAgra Foods',
    short_name: 'CAG',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1300',
    name: 'TJX',
    short_name: 'TJX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1301',
    name: 'Whirlpool',
    short_name: 'WHR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1302',
    name: 'FirstEnergy',
    short_name: 'FE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1303',
    name: 'Globe Life',
    short_name: 'GL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1304',
    name: 'PulteGroup',
    short_name: 'PHM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1305',
    name: 'Valero Energy',
    short_name: 'VLO',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1306',
    name: 'Noble Energy',
    short_name: 'NBL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1307',
    name: 'Boston Scientific',
    short_name: 'BSX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1308',
    name: 'Capital One Financial',
    short_name: 'COF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1309',
    name: 'Norfolk Southern',
    short_name: 'NSC',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1310',
    name: 'Aflac',
    short_name: 'AFL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1311',
    name: 'Harley-Davidson',
    short_name: 'HOG',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1312',
    name: 'Equity Residential',
    short_name: 'EQR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1313',
    name: 'Air Products',
    short_name: 'APD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1314',
    name: 'HP Inc',
    short_name: 'HPQ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1315',
    name: 'Honeywell',
    short_name: 'HON',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1316',
    name: 'M&T Bank',
    short_name: 'MTB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1317',
    name: 'Mosaic',
    short_name: 'MOS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1318',
    name: 'PerkinElmer',
    short_name: 'PKI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1319',
    name: 'Freeport-McMoran',
    short_name: 'FCX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1320',
    name: 'AutoZone',
    short_name: 'AZO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1321',
    name: 'Sysco',
    short_name: 'SYY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1322',
    name: 'Ameren',
    short_name: 'AEE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1323',
    name: 'Eaton',
    short_name: 'ETN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1324',
    name: 'Salesforce.com',
    short_name: 'CRM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1325',
    name: 'Consolidated Edison',
    short_name: 'ED',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1326',
    name: 'The AES',
    short_name: 'AES',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1327',
    name: 'Apartment Invest',
    short_name: 'AIV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1328',
    name: 'Textron',
    short_name: 'TXT',
    country: 'united-states',
    sector: 'Conglomerates',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1329',
    name: 'U.S. Bancorp',
    short_name: 'USB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1330',
    name: 'Comerica',
    short_name: 'CMA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1331',
    name: 'Tiffany&Co',
    short_name: 'TIF',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1332',
    name: 'Baker Hughes',
    short_name: 'BKR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1333',
    name: 'Western Union',
    short_name: 'WU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1334',
    name: 'Hess',
    short_name: 'HES',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1335',
    name: 'Yum! Brands',
    short_name: 'YUM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1336',
    name: 'Marsh McLennan',
    short_name: 'MMC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1337',
    name: 'Kellogg',
    short_name: 'K',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1338',
    name: 'Kimco',
    short_name: 'KIM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1339',
    name: 'Ecolab',
    short_name: 'ECL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1340',
    name: 'Nordstrom',
    short_name: 'JWN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1341',
    name: 'EOG Resources',
    short_name: 'EOG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1342',
    name: 'Aon',
    short_name: 'AON',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1343',
    name: 'Bank of NY Mellon',
    short_name: 'BK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1344',
    name: 'Schlumberger',
    short_name: 'SLB',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1345',
    name: 'Rockwell Automation',
    short_name: 'ROK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1346',
    name: 'Danaher',
    short_name: 'DHR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1347',
    name: 'Agilent Technologies',
    short_name: 'A',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1348',
    name: 'Delta Air Lines',
    short_name: 'DAL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1349',
    name: 'Macy\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s Inc',
    short_name: 'M',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1350',
    name: 'Moody\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s',
    short_name: 'MCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1351',
    name: 'Weyerhaeuser',
    short_name: 'WY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1352',
    name: 'Lowe\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s',
    short_name: 'LOW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1353',
    name: 'BlackRock',
    short_name: 'BLK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1354',
    name: 'Loews',
    short_name: 'L',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1355',
    name: 'NextEra Energy',
    short_name: 'NEE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1356',
    name: 'Edwards Lifesciences',
    short_name: 'EW',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1357',
    name: 'Amphenol',
    short_name: 'APH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1358',
    name: 'Berkshire Hathaway B',
    short_name: 'BRKb',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1359',
    name: 'Coterra Energy',
    short_name: 'COG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1360',
    name: 'CarMax',
    short_name: 'KMX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1361',
    name: 'Chipotle Mexican Grill',
    short_name: 'CMG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1362',
    name: 'DaVita',
    short_name: 'DVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1363',
    name: 'FMC',
    short_name: 'FMC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1364',
    name: 'TechnipFMC',
    short_name: 'FTI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1365',
    name: 'Flowserve',
    short_name: 'FLS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1366',
    name: 'L3Harris Technologies',
    short_name: 'LHX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1367',
    name: 'Healthpeak Properties',
    short_name: 'PEAK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1368',
    name: 'Welltower',
    short_name: 'WELL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1369',
    name: 'Helmerich Payne',
    short_name: 'HP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1370',
    name: 'Hormel Foods',
    short_name: 'HRL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1371',
    name: 'Invesco',
    short_name: 'IVZ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1372',
    name: 'Iron Mountain',
    short_name: 'IRM',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1373',
    name: 'Eversource Energy',
    short_name: 'ES',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1374',
    name: 'NRG',
    short_name: 'NRG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1375',
    name: 'ONEOK',
    short_name: 'OKE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1376',
    name: 'Pioneer Natural',
    short_name: 'PXD',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1377',
    name: 'Republic Services',
    short_name: 'RSG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1378',
    name: 'Roper Technologies',
    short_name: 'ROP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1379',
    name: 'Ventas',
    short_name: 'VTR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1380',
    name: 'WEC Energy',
    short_name: 'WEC',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1381',
    name: 'Marathon Petroleum',
    short_name: 'MPC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1382',
    name: 'Under Armour A',
    short_name: 'UAA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1383',
    name: 'SVB',
    short_name: 'SIVB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1384',
    name: 'BorgWarner',
    short_name: 'BWA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1385',
    name: 'Quanta Services',
    short_name: 'PWR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1386',
    name: 'TE Connectivity',
    short_name: 'TEL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1387',
    name: 'Mid-America Apartment',
    short_name: 'MAA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1388',
    name: 'Huntington Ingalls Industries',
    short_name: 'HII',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1389',
    name: 'Mettler-Toledo',
    short_name: 'MTD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1390',
    name: 'Federal Realty',
    short_name: 'FRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1391',
    name: 'Affiliated Managers',
    short_name: 'AMG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1392',
    name: 'Martin Marietta Materials',
    short_name: 'MLM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1393',
    name: 'Raymond James Financial',
    short_name: 'RJF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1394',
    name: 'Digital',
    short_name: 'DLR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1395',
    name: 'Essex Property',
    short_name: 'ESS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1396',
    name: 'Cooper',
    short_name: 'COO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1397',
    name: 'Concho Resources',
    short_name: 'CXO',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1398',
    name: 'Everest',
    short_name: 'RE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1399',
    name: 'Regency Centers',
    short_name: 'REG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1400',
    name: 'Dollar General',
    short_name: 'DG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1401',
    name: 'First Republic Bank',
    short_name: 'FRC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1402',
    name: 'Nielsen',
    short_name: 'NLSN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1403',
    name: 'Transdigm',
    short_name: 'TDG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1404',
    name: 'Atmos Energy',
    short_name: 'ATO',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1405',
    name: 'Duke',
    short_name: 'DRE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1406',
    name: 'HCA',
    short_name: 'HCA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1407',
    name: 'Rollins',
    short_name: 'ROL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1408',
    name: 'ResMed',
    short_name: 'RMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1409',
    name: 'MSCI',
    short_name: 'MSCI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1410',
    name: 'Carnival Corp',
    short_name: 'CCL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1411',
    name: 'WellCare Health Plans',
    short_name: 'WCG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1412',
    name: 'Alexandria RE',
    short_name: 'ARE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1413',
    name: 'Teleflex',
    short_name: 'TFX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1414',
    name: 'Westinghouse Air Brake',
    short_name: 'WAB',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1415',
    name: 'Evergy',
    short_name: 'EVRG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1416',
    name: 'Capri Holdings',
    short_name: 'CPRI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1417',
    name: 'Aptiv',
    short_name: 'APTV',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1418',
    name: 'Crown Castle',
    short_name: 'CCI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1419',
    name: 'Foot Locker',
    short_name: 'FL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1420',
    name: 'Macerich',
    short_name: 'MAC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1421',
    name: 'Pentair',
    short_name: 'PNR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1422',
    name: 'People\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s United',
    short_name: 'PBCT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1423',
    name: 'Tractor Supply',
    short_name: 'TSCO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1424',
    name: 'Perrigo',
    short_name: 'PRGO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1425',
    name: 'Bread Financial Holdings',
    short_name: 'ADS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1426',
    name: 'Advance Auto Parts',
    short_name: 'AAP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1427',
    name: 'Kansas City Southern',
    short_name: 'KSU',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1428',
    name: 'SL Green',
    short_name: 'SLG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1429',
    name: 'United Rentals',
    short_name: 'URI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1430',
    name: 'Kinder Morgan',
    short_name: 'KMI',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1431',
    name: 'Cimarex Energy',
    short_name: 'XEC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1432',
    name: 'Albemarle',
    short_name: 'ALB',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1433',
    name: 'Centene',
    short_name: 'CNC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1434',
    name: 'Phillips 66',
    short_name: 'PSX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1435',
    name: 'Xylem',
    short_name: 'XYL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1436',
    name: 'PVH',
    short_name: 'PVH',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1437',
    name: 'UDR',
    short_name: 'UDR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1438',
    name: 'TripAdvisor',
    short_name: 'TRIP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1439',
    name: 'SBA Communications',
    short_name: 'SBAC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1440',
    name: 'Gartner',
    short_name: 'IT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1441',
    name: 'Universal Health Services',
    short_name: 'UHS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1442',
    name: 'LKQ',
    short_name: 'LKQ',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1443',
    name: 'Broadridge',
    short_name: 'BR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1444',
    name: 'Extra Space Storage',
    short_name: 'EXR',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1445',
    name: 'Mohawk Industries',
    short_name: 'MHK',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1446',
    name: 'American Water Works',
    short_name: 'AWK',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1447',
    name: 'Alliant Energy',
    short_name: 'LNT',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1448',
    name: 'Hanesbrands',
    short_name: 'HBI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1449',
    name: 'Celanese',
    short_name: 'CE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1450',
    name: 'Alaska Air',
    short_name: 'ALK',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1451',
    name: 'Ametek',
    short_name: 'AME',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1452',
    name: 'LyondellBasell Industries',
    short_name: 'LYB',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1453',
    name: 'Royal Caribbean Cruises',
    short_name: 'RCL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1454',
    name: 'FleetCor',
    short_name: 'FLT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1455',
    name: 'Packaging America',
    short_name: 'PKG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1456',
    name: 'Arthur J Gallagher',
    short_name: 'AJG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1457',
    name: 'Church&Dwight',
    short_name: 'CHD',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1458',
    name: 'Global Payments',
    short_name: 'GPN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1459',
    name: 'HollyFrontier',
    short_name: 'HFC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1460',
    name: 'Realty Income',
    short_name: 'O',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1461',
    name: 'AO Smith',
    short_name: 'AOS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1462',
    name: 'Fortune Brands',
    short_name: 'FBHS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1463',
    name: 'Cboe Global',
    short_name: 'CBOE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1464',
    name: 'Copart',
    short_name: 'CPRT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1465',
    name: 'AbbVie',
    short_name: 'ABBV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1466',
    name: 'Diamondback',
    short_name: 'FANG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1467',
    name: 'Norwegian Cruise Line',
    short_name: 'NCLH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1468',
    name: 'Zoetis Inc',
    short_name: 'ZTS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1469',
    name: 'IQVIA Holdings',
    short_name: 'IQV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1470',
    name: 'Coty Inc',
    short_name: 'COTY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1471',
    name: 'Twitter Inc',
    short_name: 'TWTR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1472',
    name: 'Hilton Worldwide',
    short_name: 'HLT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1473',
    name: 'Allegion PLC',
    short_name: 'ALLE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1474',
    name: 'IHS Markit Ltd',
    short_name: 'INFO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1475',
    name: 'Arista Networks',
    short_name: 'ANET',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1476',
    name: 'Synchrony Financial',
    short_name: 'SYF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1477',
    name: 'Citizens Financial Group Inc',
    short_name: 'CFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1478',
    name: 'Keysight Technologies',
    short_name: 'KEYS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1479',
    name: 'Qorvo Inc',
    short_name: 'QRVO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1480',
    name: 'WestRock Co',
    short_name: 'WRK',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1481',
    name: 'Hewlett Packard',
    short_name: 'HPE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1482',
    name: 'Under Armour C',
    short_name: 'UA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1483',
    name: 'Fortive',
    short_name: 'FTV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1484',
    name: 'Arconic',
    short_name: 'ARNC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1485',
    name: 'Lamb Weston Holdings',
    short_name: 'LW',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1487',
    name: 'Corteva',
    short_name: 'CTVA',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1488',
    name: 'Amcor PLC',
    short_name: 'AMCR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1637',
    name: 'Ryder System',
    short_name: 'R',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1638',
    name: 'PG E',
    short_name: 'PCG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1639',
    name: 'Kirby',
    short_name: 'KEX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1640',
    name: 'Matson',
    short_name: 'MATX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1641',
    name: 'Avis',
    short_name: 'CAR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1737',
    name: 'Evolve Transition Infrastructure LP Unt',
    short_name: 'SNMP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1738',
    name: 'Centrus Energy',
    short_name: 'LEU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1739',
    name: 'Golden Star',
    short_name: 'GSS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1740',
    name: 'Cheniere Energy',
    short_name: 'LNG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1741',
    name: 'Protalix',
    short_name: 'PLX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1742',
    name: 'Paramount Gold Nevada',
    short_name: 'PZG',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1743',
    name: 'Denison Mines',
    short_name: 'DNN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1744',
    name: 'Imperial Oil',
    short_name: 'IMO',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1745',
    name: 'Northern Dynasty Minerals',
    short_name: 'NAK',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1746',
    name: 'Novagold',
    short_name: 'NG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1747',
    name: 'New Gold',
    short_name: 'NGD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1748',
    name: 'Taseko Mines',
    short_name: 'TGB',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1749',
    name: 'Almaden Minerals',
    short_name: 'AAU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1750',
    name: 'Avino Silver Gold',
    short_name: 'ASM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1751',
    name: 'Alexco Resource',
    short_name: 'AXU',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1752',
    name: 'EMX Royalty',
    short_name: 'EMX',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1753',
    name: 'Great Panther Mining',
    short_name: 'GPL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1754',
    name: 'International Tower Hill',
    short_name: 'THM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1755',
    name: 'Galiano Gold',
    short_name: 'GAU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1756',
    name: 'MAG Silver',
    short_name: 'MAG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1757',
    name: 'Platinum Group Metals',
    short_name: 'PLG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1758',
    name: 'Western Copper Gold',
    short_name: 'WRN',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1759',
    name: 'Grupo Simec ADR',
    short_name: 'SIM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1760',
    name: 'American Shared Hospital Srvcs',
    short_name: 'AMS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1761',
    name: 'Flanigans Enterprises Inc',
    short_name: 'BDL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1762',
    name: 'Birks Group Inc',
    short_name: 'BGI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1763',
    name: 'Bowl America Inc',
    short_name: 'BWLa',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1764',
    name: 'CKX Lands Inc',
    short_name: 'CKX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1765',
    name: 'Continental Materials',
    short_name: 'CUO_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1766',
    name: 'Electromed',
    short_name: 'ELMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1767',
    name: 'Evans Bancorp Inc',
    short_name: 'EVBN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1768',
    name: 'Gold Standard',
    short_name: 'GSV',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1769',
    name: 'Gran Tierra',
    short_name: 'GTE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1770',
    name: 'HMG Courtland Properties',
    short_name: 'HMG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1771',
    name: 'Teligent',
    short_name: 'TLGT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '1772',
    name: 'Intelligent Systems',
    short_name: 'INS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1773',
    name: 'GEE Group',
    short_name: 'JOB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1774',
    name: 'Trilogy Metals',
    short_name: 'TMQ',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1775',
    name: 'Nuveen PA MVF',
    short_name: 'NPN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1776',
    name: 'Yuma Energy Inc',
    short_name: 'YUMA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1777',
    name: 'Polymet Mining',
    short_name: 'PLM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1778',
    name: 'Southwest Georgia Financial',
    short_name: 'SGB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1779',
    name: 'Trans Atlantic Petroleum',
    short_name: 'TAT',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1780',
    name: 'Alio Gold',
    short_name: 'ALO',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1781',
    name: 'Tanzanian Royalty Exploration',
    short_name: 'TRX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1782',
    name: 'Northern Oil&Gas',
    short_name: 'NOG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1783',
    name: 'VirnetX',
    short_name: 'VHC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1784',
    name: 'Aberdeen Asia-Pacific',
    short_name: 'FAX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1785',
    name: 'Aberdeen Australia',
    short_name: 'IAF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1786',
    name: 'Aberdeen Global',
    short_name: 'FCO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1787',
    name: 'Acme United',
    short_name: 'ACU',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1788',
    name: 'Adams Resources&Energy',
    short_name: 'AE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1789',
    name: 'AeroCentury',
    short_name: 'ACY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1790',
    name: 'Alpha Pro Tech',
    short_name: 'APT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1791',
    name: 'AMCON Distributing',
    short_name: 'DIT',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1792',
    name: 'Planet Green',
    short_name: 'PLAG',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1793',
    name: 'Ampio Pharm',
    short_name: 'AMPE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1794',
    name: 'Micron Solutions',
    short_name: 'MICR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1795',
    name: 'Avalon',
    short_name: 'AWX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1796',
    name: 'Ballantyne Strong',
    short_name: 'BTN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1797',
    name: 'Bancroft',
    short_name: 'BCV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1798',
    name: 'Bancorp of New Jersey',
    short_name: 'BKJ_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1799',
    name: 'Bar Harbor Bankshares',
    short_name: 'BHB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1800',
    name: 'Barnwell Industries',
    short_name: 'BRN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1801',
    name: 'Lineage Cell Therapeutics',
    short_name: 'LCTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1802',
    name: 'Blonder Tongue Labs',
    short_name: 'BDR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1803',
    name: 'CPI Aerostructures',
    short_name: 'CVU',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1804',
    name: 'CEL-SCI',
    short_name: 'CVM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1805',
    name: 'Central Securities',
    short_name: 'CET',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1806',
    name: 'Chase',
    short_name: 'CCF',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1807',
    name: 'Chicago Rivet&Machine',
    short_name: 'CVR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1808',
    name: 'China Pharma',
    short_name: 'CPHI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1809',
    name: 'Clough Global Allocation',
    short_name: 'GLV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1810',
    name: 'Clough Global',
    short_name: 'GLQ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1811',
    name: 'Clough Global Opportunities',
    short_name: 'GLO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1812',
    name: 'CompX',
    short_name: 'CIX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1813',
    name: 'Comstock Mining',
    short_name: 'LODE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1814',
    name: 'CTO Realty Growth',
    short_name: 'CTO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1815',
    name: 'Contango Oil & Gas Co',
    short_name: 'MCF',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1816',
    name: 'Core Molding',
    short_name: 'CMT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1817',
    name: 'CorMedix',
    short_name: 'CRMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1818',
    name: 'Cornerstone Strategic Value',
    short_name: 'CLM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1819',
    name: 'Cornerstone Strategic Return',
    short_name: 'CRF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1820',
    name: 'Credit Suisse',
    short_name: 'CIK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1821',
    name: 'Credit Suisse Hi-Yield Bond',
    short_name: 'DHY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1822',
    name: 'Daxor',
    short_name: 'DXR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1823',
    name: 'Delaware Colorado',
    short_name: 'VCF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1824',
    name: 'Delaware Florida',
    short_name: 'VFL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1825',
    name: 'Delaware Minnesota II',
    short_name: 'VMM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1826',
    name: 'Delta Apparel',
    short_name: 'DLA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1827',
    name: 'BitNile Holdings',
    short_name: 'DPW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1828',
    name: 'DSS',
    short_name: 'DSS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1829',
    name: 'Bny Mellon Municipal',
    short_name: 'DMF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1830',
    name: 'Eagle',
    short_name: 'GRF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1831',
    name: 'ETV California MIT',
    short_name: 'CEV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1832',
    name: 'ETV New York MIT',
    short_name: 'EVY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1833',
    name: 'ETV MBF',
    short_name: 'EIM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1834',
    name: 'ETV New York MBF',
    short_name: 'ENX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1835',
    name: 'ETV California MBF',
    short_name: 'EVM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1836',
    name: 'ETV Limited Duration',
    short_name: 'EVV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1837',
    name: 'Ellsworth Convertible Growth',
    short_name: 'ECF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1838',
    name: 'eMagin',
    short_name: 'EMAN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1839',
    name: 'Emerson Radio',
    short_name: 'MSN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1840',
    name: 'EVI Industries',
    short_name: 'EVI',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1841',
    name: 'Espey Mfg&Electronics',
    short_name: 'ESP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1842',
    name: 'Evolution Petroleum',
    short_name: 'EPM',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1843',
    name: 'First Trust Energy',
    short_name: 'FEN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1844',
    name: 'Flexible Solutions',
    short_name: 'FSI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1845',
    name: 'Franklin Street Properties',
    short_name: 'FSP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1846',
    name: 'Franklin Templeton',
    short_name: 'FTF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1847',
    name: 'Friedman Industries',
    short_name: 'FRD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1848',
    name: 'Gabelli',
    short_name: 'GLU',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1849',
    name: 'GAMCO',
    short_name: 'GGN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1850',
    name: 'General Moly',
    short_name: 'GMO',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1851',
    name: 'GlobalSCAPE',
    short_name: 'GSB',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1852',
    name: 'Oblong',
    short_name: 'OBLG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1853',
    name: 'Gold Resource',
    short_name: 'GORO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1854',
    name: 'Golden Minerals',
    short_name: 'AUMN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1855',
    name: 'Goldfield',
    short_name: 'GV',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1856',
    name: 'AIM ImmunoTech',
    short_name: 'AIM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1857',
    name: 'Houston American Energy',
    short_name: 'HUSA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1858',
    name: 'IEC',
    short_name: 'IEC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1859',
    name: 'Ibio',
    short_name: 'IBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1860',
    name: 'Impac Mortgage',
    short_name: 'IMH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1861',
    name: 'Income Opportunity Realty',
    short_name: 'IOR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1862',
    name: 'InfuSystems',
    short_name: 'INFU',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1863',
    name: 'Cohen & Co',
    short_name: 'COHN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1864',
    name: 'InnSuites Hospitality',
    short_name: 'IHT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1865',
    name: 'Intellicheck Mobilisa',
    short_name: 'IDN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1866',
    name: 'Invesco Advantage II',
    short_name: 'VKI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1867',
    name: 'IsoRay',
    short_name: 'ISR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1868',
    name: 'LGL Group',
    short_name: 'LGL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1869',
    name: 'Ladenburg Thalmann',
    short_name: 'LTS_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1870',
    name: 'Libbey',
    short_name: 'LBY_old',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1871',
    name: 'Camber Energy Inc',
    short_name: 'CEI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1872',
    name: 'Mastech',
    short_name: 'MHH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1873',
    name: 'Mexco Energy',
    short_name: 'MXC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1874',
    name: 'Brooklyn Immunotherapeutics',
    short_name: 'BTX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1875',
    name: 'National HealthCare',
    short_name: 'NHC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1876',
    name: 'Navidea Biopharma',
    short_name: 'NAVB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1877',
    name: 'Neuberger Berman California',
    short_name: 'NBW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1878',
    name: 'Neuberger Berman New York',
    short_name: 'NBO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1879',
    name: 'Neuberger Berman',
    short_name: 'NBH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1880',
    name: 'Neuberger Berman Hi-Yield',
    short_name: 'NHS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1881',
    name: 'Neuberger Berman RE',
    short_name: 'NRO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1882',
    name: 'New Concept Energy',
    short_name: 'GBR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1883',
    name: 'New England Realty',
    short_name: 'NEN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1884',
    name: 'NovaBay Pharmaceuticals',
    short_name: 'NBY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1885',
    name: 'IT Tech Packaging',
    short_name: 'ITP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1886',
    name: 'Palatin',
    short_name: 'PTN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1887',
    name: 'Park National',
    short_name: 'PRK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1888',
    name: 'Pioneer Diversified',
    short_name: 'HNW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1889',
    name: 'Power REIT',
    short_name: 'PW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1890',
    name: 'Radiant',
    short_name: 'RLGT',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1891',
    name: 'Reaves Utility',
    short_name: 'UTG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1892',
    name: 'BK Tech',
    short_name: 'BKTI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1893',
    name: 'RENN Fund',
    short_name: 'RCG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1894',
    name: 'Retractable',
    short_name: 'RVP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1895',
    name: 'RMR Real Estate',
    short_name: 'RIF_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1896',
    name: 'Seaboard',
    short_name: 'SEB',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1897',
    name: 'Servotronics',
    short_name: 'SVT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1898',
    name: 'SIFCO',
    short_name: 'SIF',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1899',
    name: 'Solitario Exploration&Royalty',
    short_name: 'XPL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1900',
    name: 'SunLink',
    short_name: 'SSY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1901',
    name: 'Synergy Resources',
    short_name: 'SRCI_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1902',
    name: 'Synthetic Biologics',
    short_name: 'SYN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1903',
    name: 'Riley Exploration Permian',
    short_name: 'REPX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1904',
    name: 'Tompkins',
    short_name: 'TMP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1905',
    name: 'Trio-Tech',
    short_name: 'TRT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1906',
    name: 'United States Antimony',
    short_name: 'UAMY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1907',
    name: 'Universal Security Instruments',
    short_name: 'UUU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1908',
    name: 'Ur Energy',
    short_name: 'URG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1909',
    name: 'Vista Gold',
    short_name: 'VGZ',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1910',
    name: 'Allspring',
    short_name: 'EAD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1911',
    name: 'Allspring Multi Sector',
    short_name: 'ERC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1912',
    name: 'Allspring Utilities High',
    short_name: 'ERH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1913',
    name: 'Wireless Telecom',
    short_name: 'WTT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1914',
    name: 'Ellomay Capital',
    short_name: 'ELLO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1915',
    name: 'Uranium Energy',
    short_name: 'UEC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1916',
    name: 'Sandstorm Gold Ltd N',
    short_name: 'SAND',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1917',
    name: 'inTest',
    short_name: 'INTT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1918',
    name: 'NanoViricides Inc',
    short_name: 'NNVC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1919',
    name: 'Oragenics',
    short_name: 'OGEN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1920',
    name: 'Energy Fuels Inc',
    short_name: 'UUUU',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1921',
    name: 'B2Gold',
    short_name: 'BTG',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1922',
    name: 'PEDEVCO',
    short_name: 'PED',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1923',
    name: 'Ring Energy Inc',
    short_name: 'REI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1924',
    name: 'Altisource Asset Management',
    short_name: 'AAMC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1925',
    name: 'Air Industries Group',
    short_name: 'AIRI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1926',
    name: 'Can Fite Biopharma ADR',
    short_name: 'CANF',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1927',
    name: 'Envela Corp',
    short_name: 'ELA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1928',
    name: 'LiqTech',
    short_name: 'LIQT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1929',
    name: 'InspireMD',
    short_name: 'NSPR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1930',
    name: 'Enservco Co',
    short_name: 'ENSV',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1931',
    name: '22nd Century',
    short_name: 'XXII',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1932',
    name: 'Globalstar Inc',
    short_name: 'GSAT',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1933',
    name: 'Kelso Technologies Inc',
    short_name: 'KIQ',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1934',
    name: 'Actinium Pharmaceuticals',
    short_name: 'ATNM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1935',
    name: 'Bluerock Residential Growth REIT',
    short_name: 'BRG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1936',
    name: 'Issuer Direct Corp',
    short_name: 'ISDR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1937',
    name: 'Asensus Surgical',
    short_name: 'ASXC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1938',
    name: 'Superior Drilling Products Inc',
    short_name: 'SDPI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1939',
    name: 'Ashford Inc',
    short_name: 'AINC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1940',
    name: 'Volitionrx Ltd',
    short_name: 'VNRX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1941',
    name: 'Corindus Vascular Robotics',
    short_name: 'CVRS_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1942',
    name: 'CRH Medical',
    short_name: 'CRHM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1943',
    name: 'Regional Health',
    short_name: 'RHE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '1944',
    name: 'Alcoa',
    short_name: 'AA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1945',
    name: 'Dell Tech',
    short_name: 'DELL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1946',
    name: 'Teva ADR',
    short_name: 'TEVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1947',
    name: 'BlackBerry',
    short_name: 'BB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1948',
    name: 'Infosys ADR',
    short_name: 'INFY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1949',
    name: 'Ciena Corp',
    short_name: 'CIEN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1950',
    name: 'Ashland Global',
    short_name: 'ASH',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1951',
    name: 'AutoNation',
    short_name: 'AN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1952',
    name: 'Fluor',
    short_name: 'FLR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1953',
    name: 'Piper Sandler',
    short_name: 'PIPR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1954',
    name: 'Kinross Gold',
    short_name: 'KGC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1955',
    name: 'Cameco',
    short_name: 'CCJ',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1956',
    name: 'Terex',
    short_name: 'TEX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1957',
    name: 'Noble Corp',
    short_name: 'NEBLQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '1958',
    name: 'Sprint',
    short_name: 'S_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1959',
    name: 'Harmony Gold Mining',
    short_name: 'HMY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1960',
    name: 'Cleveland-Cliffs',
    short_name: 'CLF',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1961',
    name: 'CNX Resources',
    short_name: 'CNX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1962',
    name: 'Teck Resources B',
    short_name: 'TECK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1963',
    name: 'Orix',
    short_name: 'IX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1964',
    name: 'Manitowoc',
    short_name: 'MTW',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1965',
    name: 'KB Home',
    short_name: 'KBH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1966',
    name: 'Allegheny Technologies',
    short_name: 'ATI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1967',
    name: 'Gold Fields ADR',
    short_name: 'GFI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1968',
    name: 'Honda Motor ADR',
    short_name: 'HMC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1969',
    name: 'Petroleo Brasileiro Petrobras ADR',
    short_name: 'PBR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1970',
    name: 'M/I Homes',
    short_name: 'MHO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1971',
    name: 'Old Copper Company',
    short_name: 'CPPRQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '1972',
    name: 'Diamond Offshore Drilling',
    short_name: 'DOFSQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '1973',
    name: 'Grupo Televisa ADR',
    short_name: 'TV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1974',
    name: 'Stewart Info Services',
    short_name: 'STC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1975',
    name: 'AK Steel',
    short_name: 'AKS_old',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1976',
    name: 'Site Centers',
    short_name: 'SITC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1977',
    name: 'Arch Resources',
    short_name: 'ARCH',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1978',
    name: 'VMware',
    short_name: 'VMW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1979',
    name: 'Sony ADR',
    short_name: 'SONY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1980',
    name: 'Teradata',
    short_name: 'TDC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1981',
    name: 'Synovus',
    short_name: 'SNV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1982',
    name: 'Wheaton Precious Metals',
    short_name: 'WPM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1983',
    name: 'Abercrombie&Fitch',
    short_name: 'ANF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1984',
    name: 'Brunswick',
    short_name: 'BC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1985',
    name: 'NewYork Times',
    short_name: 'NYT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1986',
    name: 'UBS Group',
    short_name: 'UBS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1987',
    name: 'Genworth',
    short_name: 'GNW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1988',
    name: 'Graham Holdings',
    short_name: 'GHC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1989',
    name: 'Tata Motors ADR',
    short_name: 'TTM',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1990',
    name: 'MBIA',
    short_name: 'MBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1991',
    name: 'HDFC Bank ADR',
    short_name: 'HDB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1992',
    name: 'Jabil Circuit',
    short_name: 'JBL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1993',
    name: 'America Movil ADR',
    short_name: 'AMX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1994',
    name: 'United States Steel',
    short_name: 'X',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1995',
    name: 'Mitsubishi UFJ Financial ADR',
    short_name: 'MUFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1996',
    name: 'Meredith',
    short_name: 'MDP',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1997',
    name: 'Yamana Gold',
    short_name: 'AUY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1998',
    name: 'ITT',
    short_name: 'ITT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '1999',
    name: 'Dean Foods',
    short_name: 'DF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2000',
    name: 'ICICI Bank ADR',
    short_name: 'IBN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2001',
    name: 'Big Lots',
    short_name: 'BIG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2002',
    name: 'Avon Products',
    short_name: 'AVP',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2003',
    name: 'Range Resources',
    short_name: 'RRC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2004',
    name: 'Hovnanian Enterprises',
    short_name: 'HOV',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2005',
    name: 'Travel + Leisure Co',
    short_name: 'TNL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2006',
    name: 'IGT',
    short_name: 'IGT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2007',
    name: 'Chesapeake Energy',
    short_name: 'CHK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2008',
    name: 'Pitney Bowes',
    short_name: 'PBI',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2009',
    name: 'First Horizon National',
    short_name: 'FHN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2010',
    name: 'Grupo Aeroportuario Sureste ADR',
    short_name: 'ASR',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2011',
    name: 'Coca-Cola European',
    short_name: 'CCEP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '2012',
    name: 'Nomura ADR',
    short_name: 'NMR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2013',
    name: 'NCR',
    short_name: 'NCR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2014',
    name: 'Las Vegas Sands',
    short_name: 'LVS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2015',
    name: 'Nabors Industries',
    short_name: 'NBR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2016',
    name: 'Tenet Healthcare',
    short_name: 'THC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2017',
    name: 'Industrias Bachoco ADR',
    short_name: 'IBA',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2018',
    name: 'Scully Royalty',
    short_name: 'SRL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2019',
    name: 'Enerpac Tool Group',
    short_name: 'EPAC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2020',
    name: 'Transocean',
    short_name: 'RIG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2021',
    name: 'Unisys',
    short_name: 'UIS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2022',
    name: 'Federated Investors B',
    short_name: 'FHI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2023',
    name: 'Ensco Rowan',
    short_name: 'VALPQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2024',
    name: 'MGIC Investment',
    short_name: 'MTG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2025',
    name: 'Toyota Motor ADR',
    short_name: 'TM',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2026',
    name: 'Canon ADR',
    short_name: 'CAJ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2027',
    name: 'Wipro ADR',
    short_name: 'WIT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2028',
    name: 'Murphy Oil',
    short_name: 'MUR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2029',
    name: 'Mizuho Financial ADR',
    short_name: 'MFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2030',
    name: 'Dillards',
    short_name: 'DDS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2031',
    name: 'Cemex ADR',
    short_name: 'CX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2032',
    name: 'Dr. Reddy\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s Labs ADR',
    short_name: 'RDY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2033',
    name: 'Lindsay',
    short_name: 'LNN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2034',
    name: 'Denbury Resources',
    short_name: 'DEN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2035',
    name: 'Reliance Steel&Aluminum',
    short_name: 'RS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2036',
    name: 'Southwestern Energy',
    short_name: 'SWN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2037',
    name: 'Carter\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s',
    short_name: 'CRI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2038',
    name: 'Keurig Dr Pepper',
    short_name: 'KDP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '2039',
    name: 'Vale ADR',
    short_name: 'VALE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2040',
    name: 'CPFL Energia ADR',
    short_name: 'CPL_old',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2041',
    name: 'Tupperware Brands',
    short_name: 'TUP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2042',
    name: 'China Green Agriculture',
    short_name: 'CGA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2043',
    name: 'Rogers Communications',
    short_name: 'RCI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2044',
    name: 'Oshkosh',
    short_name: 'OSK',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2045',
    name: 'Adtalem Education',
    short_name: 'ATGE',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2046',
    name: 'EQT',
    short_name: 'EQT',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2047',
    name: 'GameStop Corp',
    short_name: 'GME',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2048',
    name: 'O-I Glass',
    short_name: 'OI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2049',
    name: 'QEP Resources',
    short_name: 'QEP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2050',
    name: 'RR Donnelley & Sons',
    short_name: 'RRD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2051',
    name: 'Barrick Gold',
    short_name: 'GOLD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2052',
    name: 'Agnico Eagle Mines',
    short_name: 'AEM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2053',
    name: 'Autoliv',
    short_name: 'ALV',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2054',
    name: 'Blackstone Group',
    short_name: 'BX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2055',
    name: 'Chimera Investment',
    short_name: 'CIM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2056',
    name: 'Cohen Steers',
    short_name: 'CNS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2057',
    name: 'Carbo Ceramics',
    short_name: 'CRR_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2058',
    name: '3D Systems',
    short_name: 'DDD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2059',
    name: 'Lazard',
    short_name: 'LAZ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2060',
    name: 'Magna Intl',
    short_name: 'MGA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2061',
    name: 'Overseas Shipholding',
    short_name: 'OSG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2062',
    name: 'RPC',
    short_name: 'RES',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2063',
    name: 'Southern Copper',
    short_name: 'SCCO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2064',
    name: 'Sandridge Energy',
    short_name: 'SD',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2065',
    name: 'Titan',
    short_name: 'TWI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2066',
    name: 'Bausch Health',
    short_name: 'BHC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2067',
    name: 'Essential Utilities',
    short_name: 'WTRG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2068',
    name: 'Liveramp',
    short_name: 'RAMP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2069',
    name: 'Argo Group Int',
    short_name: 'ARGO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2070',
    name: 'America Movil ADR A',
    short_name: 'AMOV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2071',
    name: 'Vereit',
    short_name: 'VER',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2072',
    name: 'Trecora Resources',
    short_name: 'TREC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2073',
    name: 'Associated Banc-Corp',
    short_name: 'ASB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2074',
    name: 'ASGN',
    short_name: 'ASGN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2075',
    name: 'Banc of California',
    short_name: 'BANC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2076',
    name: 'Berkshire Hills Bancorp',
    short_name: 'BHLB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2077',
    name: 'Axos Financial',
    short_name: 'AX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2078',
    name: 'DRDGOLD ADR',
    short_name: 'DRD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2079',
    name: '8x8',
    short_name: 'EGHT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2080',
    name: 'HCI Group Inc',
    short_name: 'HCI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2081',
    name: 'Amneal Pharma A',
    short_name: 'AMRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2082',
    name: 'Centerspace',
    short_name: 'CSR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2083',
    name: 'Kaman',
    short_name: 'KAMN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2084',
    name: 'Madison Square Garden Sports',
    short_name: 'MSGS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2085',
    name: 'PGT Innovations',
    short_name: 'PGTI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2086',
    name: 'Perspecta',
    short_name: 'PRSP',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2087',
    name: 'Rudolph',
    short_name: 'RTEC_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2088',
    name: 'Spirit Airlines',
    short_name: 'SAVE',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2089',
    name: 'Team',
    short_name: 'TISI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2090',
    name: 'Ubiquiti',
    short_name: 'UI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2091',
    name: 'United Natural Foods',
    short_name: 'UNFI',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2092',
    name: 'US Physicalrapy',
    short_name: 'USPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2093',
    name: 'WPP ADR',
    short_name: 'WPP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2094',
    name: 'Leidos',
    short_name: 'LDOS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2095',
    name: 'American Equity Inv. Life',
    short_name: 'AEL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2096',
    name: 'GAP ADR',
    short_name: 'PAC',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2097',
    name: 'ASE Industrial ADR',
    short_name: 'ASX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2098',
    name: 'California Water Service',
    short_name: 'CWT',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2099',
    name: 'IRSA ADR',
    short_name: 'IRS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2100',
    name: 'MFA Financial',
    short_name: 'MFA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2101',
    name: 'Apollo Commercial RE Finance',
    short_name: 'ARI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2102',
    name: 'Concord Medical Services',
    short_name: 'CCM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2103',
    name: 'China Distance Education',
    short_name: 'DL',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2104',
    name: 'PLDT ADR',
    short_name: 'PHI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2105',
    name: 'Roadrunner',
    short_name: 'RRTS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2106',
    name: 'Superior Industries',
    short_name: 'SUP',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2107',
    name: 'Transcontinental',
    short_name: 'TCI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2108',
    name: 'Monmouth RE',
    short_name: 'MNR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2109',
    name: 'Schweitzer-Mauduit',
    short_name: 'SWM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2110',
    name: 'Applied Industrial Technologies',
    short_name: 'AIT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2111',
    name: 'Charles River Laboratories',
    short_name: 'CRL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2112',
    name: 'Pennsylvania RE',
    short_name: 'PEI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2113',
    name: 'Sumitomo Mitsui Financial ADR',
    short_name: 'SMFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2114',
    name: 'Federal Agricultural Mortgage',
    short_name: 'AGM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2115',
    name: 'BBVA ADR',
    short_name: 'BBVA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2116',
    name: 'Clear Channel',
    short_name: 'CCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2117',
    name: 'Canadian Imperial Bank',
    short_name: 'CM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2118',
    name: 'North American Construction',
    short_name: 'NOA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2119',
    name: 'PennyMac Mortgage',
    short_name: 'PMT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2120',
    name: 'Oi ADR',
    short_name: 'OIBRc',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2121',
    name: 'First Commonwealth Financial',
    short_name: 'FCF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2122',
    name: 'First Industrial RT',
    short_name: 'FR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2123',
    name: 'RPT Realty',
    short_name: 'RPT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2124',
    name: 'Booz Allen Hamilton',
    short_name: 'BAH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2125',
    name: 'Hawaiian Electric Industries',
    short_name: 'HE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2126',
    name: 'Helix',
    short_name: 'HLX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2127',
    name: 'AG Mortgage Investment',
    short_name: 'MITT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2128',
    name: 'Provident',
    short_name: 'PFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2129',
    name: 'Reinsurance of America',
    short_name: 'RGA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2130',
    name: 'Arlington Asset Investment',
    short_name: 'AAIC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2131',
    name: 'Brookfield Asset Management',
    short_name: 'BAM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2132',
    name: 'China Eastern Airlines',
    short_name: 'CEA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2133',
    name: 'Choice Hotels',
    short_name: 'CHH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2134',
    name: 'Equity Lifestyle',
    short_name: 'ELS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2135',
    name: 'Entravision',
    short_name: 'EVC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2136',
    name: 'Everi Holdings',
    short_name: 'EVRI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2137',
    name: 'Haverty Furniture',
    short_name: 'HVT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2138',
    name: 'Kingsway Financial',
    short_name: 'KFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2139',
    name: 'Kraton',
    short_name: 'KRA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2140',
    name: 'LL Flooring Holdings',
    short_name: 'LL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2141',
    name: 'PNM Resources',
    short_name: 'PNM',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2142',
    name: 'Pzena Investment Management',
    short_name: 'PZN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2143',
    name: 'Spirit Aerosystems',
    short_name: 'SPR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2144',
    name: 'Pyxus',
    short_name: 'PYYX',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2145',
    name: 'Armstrong World Industries',
    short_name: 'AWI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2146',
    name: 'American Axle&Manufacturing',
    short_name: 'AXL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2147',
    name: 'Cervecerias ADR',
    short_name: 'CCU',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2148',
    name: 'Canadian Natural',
    short_name: 'CNQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2149',
    name: 'China Yuchai',
    short_name: 'CYD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2150',
    name: 'Centrais Electricas Brasileiras',
    short_name: 'EBR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2151',
    name: 'New Oriental Education&Tech',
    short_name: 'EDU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2152',
    name: 'EPR Properties',
    short_name: 'EPR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2153',
    name: 'Graphic Packaging',
    short_name: 'GPK',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2154',
    name: 'Maui Land&Pineapple',
    short_name: 'MLP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2155',
    name: 'MSC Industrial Direct',
    short_name: 'MSM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2156',
    name: 'Natural Gas Services',
    short_name: 'NGS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2157',
    name: 'National Presto Industries',
    short_name: 'NPK',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2158',
    name: 'SFLoration Ltd',
    short_name: 'SFL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2159',
    name: 'Shinhan',
    short_name: 'SHG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2160',
    name: 'Simpson Manufacturing',
    short_name: 'SSD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2161',
    name: 'Telephone&Data Systems',
    short_name: 'TDS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2162',
    name: 'Ashford Hospitality',
    short_name: 'AHT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2163',
    name: 'American Realty Investors',
    short_name: 'ARL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2164',
    name: 'Box Inc',
    short_name: 'BOX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2165',
    name: 'Dover Motorsports',
    short_name: 'DVD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2166',
    name: 'Hudson Pacific',
    short_name: 'HPP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2167',
    name: 'Haverty Furniture A',
    short_name: 'HVTa',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2168',
    name: 'InterContinental ADR',
    short_name: 'IHG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2169',
    name: 'China Life Insurance ADR',
    short_name: 'LFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2170',
    name: 'Lions Gate',
    short_name: 'LGFa',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2171',
    name: 'Laredo Petroleum',
    short_name: 'LPI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2172',
    name: 'Live Nation Entertainment',
    short_name: 'LYV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2173',
    name: 'National Health Investors',
    short_name: 'NHI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2174',
    name: 'Annaly Capital Management',
    short_name: 'NLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2175',
    name: 'Quanex Building Products',
    short_name: 'NX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2176',
    name: 'Royal Bank Scotland',
    short_name: 'RBS_old_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2177',
    name: 'China Unicom',
    short_name: 'CHU',
    country: 'united-states',
    sector: 'Communication Services',
    exch: '',
    ccy: ''
  },
  {
    id: '2178',
    name: 'Chatham Lodging',
    short_name: 'CLDT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2179',
    name: 'Diamondrock Hospitality',
    short_name: 'DRH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2180',
    name: 'Audacy',
    short_name: 'AUD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2181',
    name: 'FactSet Research',
    short_name: 'FDS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2182',
    name: 'Genco Shipping Trading',
    short_name: 'GNK',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2183',
    name: 'Medical Properties',
    short_name: 'MPW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2184',
    name: 'MagnaChip',
    short_name: 'MX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2185',
    name: 'Navios Maritime Holdings',
    short_name: 'NM',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2186',
    name: 'OFG Bancorp',
    short_name: 'OFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2187',
    name: 'Oil States',
    short_name: 'OIS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2188',
    name: 'Select Medical',
    short_name: 'SEM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2189',
    name: 'Sunstone Hotel Investors',
    short_name: 'SHO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2190',
    name: 'Genesis Healthcare Inc',
    short_name: 'GENN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2191',
    name: 'Spectrum Brands',
    short_name: 'SPB',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2192',
    name: 'Asbury Automotive',
    short_name: 'ABG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2193',
    name: 'AMN Healthcare Services',
    short_name: 'AMN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2194',
    name: 'Anworth Mortgage Asset',
    short_name: 'ANH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2195',
    name: 'ARC Document Solutions',
    short_name: 'ARC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2196',
    name: 'Fresh Del Monte Produce',
    short_name: 'FDP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2197',
    name: 'Fresenius Medical Care ADR',
    short_name: 'FMS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2198',
    name: 'Hanger',
    short_name: 'HNGR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2199',
    name: 'Summit Hotel Properties',
    short_name: 'INN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2200',
    name: 'John Bean Tech',
    short_name: 'JBT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2201',
    name: 'JinkoSolar',
    short_name: 'JKS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2202',
    name: 'Kennedy-Wilson',
    short_name: 'KW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2203',
    name: 'McDermott',
    short_name: 'MDR_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2204',
    name: 'MSA Safety',
    short_name: 'MSA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2205',
    name: 'Nordic American Tankers',
    short_name: 'NAT',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2206',
    name: 'Navistar',
    short_name: 'NAV',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2207',
    name: 'Penske Automotive',
    short_name: 'PAG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2208',
    name: 'Prestige Brand',
    short_name: 'PBH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2209',
    name: 'REX American Resources',
    short_name: 'REX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2210',
    name: 'South Jersey Industries',
    short_name: 'SJI',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2211',
    name: 'Standard Motor Products',
    short_name: 'SMP',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2212',
    name: 'Starwood Property',
    short_name: 'STWD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2213',
    name: 'Triton Int',
    short_name: 'TRTN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2214',
    name: 'Molson Coors Brewing A',
    short_name: 'TAPa',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2215',
    name: 'Arcos Dorados',
    short_name: 'ARCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2216',
    name: 'American States Water',
    short_name: 'AWR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2217',
    name: 'Capital Senior Living',
    short_name: 'CSU',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2218',
    name: 'Ryman Hospitality Properties',
    short_name: 'RHP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2219',
    name: 'Guangshen Railway',
    short_name: 'GSHHY',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2220',
    name: 'Horace Mann Educators',
    short_name: 'HMN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2221',
    name: 'Hornbeck',
    short_name: 'HOS_old',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2222',
    name: 'Northwest Natural Gas',
    short_name: 'NWN',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2223',
    name: 'One Liberty',
    short_name: 'OLP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2224',
    name: 'Prudential Public ADR',
    short_name: 'PUK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2225',
    name: 'Renaissancere',
    short_name: 'RNR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2226',
    name: 'Standex',
    short_name: 'SXI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2227',
    name: 'Sensient Technologies',
    short_name: 'SXT',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2228',
    name: 'American Assets',
    short_name: 'AAT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2229',
    name: 'Albany',
    short_name: 'AIN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2230',
    name: 'Anixter',
    short_name: 'AXE_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2231',
    name: 'Basic Energy Services',
    short_name: 'BAS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2232',
    name: 'Build-A-Bear Workshop',
    short_name: 'BBW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2233',
    name: 'Benchmark Electronics',
    short_name: 'BHE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2234',
    name: 'Foreign Trade Bank of Latin America',
    short_name: 'BLX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2235',
    name: 'Community Bank System',
    short_name: 'CBU',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2236',
    name: 'Energy of Minas Gerais DRC',
    short_name: 'CIGc',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2237',
    name: 'Continental Resources',
    short_name: 'CLR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2238',
    name: 'Compass Minerals',
    short_name: 'CMP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2239',
    name: 'Chesapeake Utilities',
    short_name: 'CPK',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2240',
    name: 'Carpenter Technology',
    short_name: 'CRS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2241',
    name: 'Cooper Tire&Rubber',
    short_name: 'CTB',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2242',
    name: 'Brinker',
    short_name: 'EAT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2243',
    name: 'Emergent Biosolutions',
    short_name: 'EBS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2244',
    name: 'Ethan Allen Interiors',
    short_name: 'ETD',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2245',
    name: 'Greenbrier',
    short_name: 'GBX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2246',
    name: 'GAIN',
    short_name: 'GCAP_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2247',
    name: 'Independence',
    short_name: 'IHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2248',
    name: 'Kepco ADR',
    short_name: 'KEP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2249',
    name: 'Knight Transportation',
    short_name: 'KNX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2250',
    name: 'Modine Manufacturing',
    short_name: 'MOD',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2251',
    name: 'Minerals Technologies',
    short_name: 'MTX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2252',
    name: 'National Grid ADR',
    short_name: 'NGG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2253',
    name: 'Prosperity Bancshares',
    short_name: 'PB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2254',
    name: 'Park Electrochemical',
    short_name: 'PKE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2255',
    name: 'Sally Beauty',
    short_name: 'SBH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2256',
    name: 'Safeguard Scientifics',
    short_name: 'SFE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2257',
    name: 'Sequans Communications',
    short_name: 'SQNS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2258',
    name: 'Bonanza Creek Energy',
    short_name: 'BCEI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2259',
    name: 'Bio-Rad Labs',
    short_name: 'BIO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2260',
    name: 'Black Knight',
    short_name: 'BKI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2261',
    name: 'Cullen/Frost Bankers',
    short_name: 'CFR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2262',
    name: 'CIRCOR',
    short_name: 'CIR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2263',
    name: 'EastGroup Properties',
    short_name: 'EGP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2264',
    name: 'Fortuna Silver',
    short_name: 'FSM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2265',
    name: 'Triple-S Management',
    short_name: 'GTS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2266',
    name: 'Granite Construction',
    short_name: 'GVA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2267',
    name: 'Hersha',
    short_name: 'HT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2268',
    name: 'KAR Auction Services',
    short_name: 'KAR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2269',
    name: 'Korn Ferry',
    short_name: 'KFY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2270',
    name: 'Lloyds Banking ADR',
    short_name: 'LYG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2271',
    name: 'Murphy USA Inc',
    short_name: 'MUSA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2272',
    name: 'Cornerstone Building',
    short_name: 'CNR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2273',
    name: 'NewJersey Resources',
    short_name: 'NJR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2274',
    name: 'Oppenheimer',
    short_name: 'OPY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2275',
    name: 'Scotts Miracle-Gro',
    short_name: 'SMG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2276',
    name: 'Smith&Nephew SNATS',
    short_name: 'SNN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2277',
    name: 'Alexander&Baldwin',
    short_name: 'ALEX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2278',
    name: 'Antero Midstream',
    short_name: 'AM',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2279',
    name: 'Acorn',
    short_name: 'ATV',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2280',
    name: 'Brandywine',
    short_name: 'BDN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2281',
    name: 'B&G Foods',
    short_name: 'BGS',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2282',
    name: 'Coeur Mining',
    short_name: 'CDE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2283',
    name: 'Chunghwa Telecom',
    short_name: 'CHT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2284',
    name: 'CNO Financial',
    short_name: 'CNO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2285',
    name: 'FBL',
    short_name: 'FFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2286',
    name: 'Fair Isaac',
    short_name: 'FICO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2287',
    name: 'Comfort Systems',
    short_name: 'FIX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2288',
    name: 'Key Energy Services',
    short_name: 'KEGX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2289',
    name: 'Kite Realty',
    short_name: 'KRG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2290',
    name: 'Methode Electronics',
    short_name: 'MEI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2291',
    name: 'Nam Tai Property',
    short_name: 'NTP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2292',
    name: 'Nu Skin',
    short_name: 'NUS',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2293',
    name: 'Oil-Dri Of America',
    short_name: 'ODC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2294',
    name: 'Meta Data',
    short_name: 'ONE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2295',
    name: 'Precision Drilling',
    short_name: 'PDS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2296',
    name: 'Pebblebrook Hotel',
    short_name: 'PEB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2297',
    name: 'Obsidian Energy',
    short_name: 'OBELF',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2298',
    name: 'Shaw B',
    short_name: 'SJR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2299',
    name: 'Life Storage',
    short_name: 'LSI',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2300',
    name: 'Embotelladora Andina',
    short_name: 'AKOa',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2301',
    name: 'American Vanguard',
    short_name: 'AVD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2302',
    name: 'Briggs&Stratton',
    short_name: 'BGG_old',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2303',
    name: 'Bio-Rad Labs B',
    short_name: 'BIOb',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2304',
    name: 'Berkshire Hathaway A',
    short_name: 'BRKa',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2305',
    name: 'CACI',
    short_name: 'CACI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2306',
    name: 'China Telecom',
    short_name: 'CHA',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2307',
    name: 'Commercial Metals',
    short_name: 'CMC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2308',
    name: 'Franklin BSP Realty Trust',
    short_name: 'CMO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2309',
    name: 'Comstock Resources',
    short_name: 'CRK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2310',
    name: 'Carlisle',
    short_name: 'CSL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2311',
    name: 'Cousins Properties',
    short_name: 'CUZ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2312',
    name: 'Employers',
    short_name: 'EIG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2313',
    name: 'Group 1 Automotive',
    short_name: 'GPI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2314',
    name: 'Hill Intl',
    short_name: 'HIL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2315',
    name: 'Jones Lang LaSalle',
    short_name: 'JLL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2316',
    name: 'KB Financial',
    short_name: 'KB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2317',
    name: 'Liberty Property',
    short_name: 'LPT_old',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2318',
    name: 'LXP Industrial Trust',
    short_name: 'LXP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2319',
    name: 'Mueller Industries',
    short_name: 'MLI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2320',
    name: 'Mechel ADR',
    short_name: 'MTL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2321',
    name: 'Mueller Water Products',
    short_name: 'MWA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2322',
    name: 'National Fuel Gas',
    short_name: 'NFG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2323',
    name: 'Ormat',
    short_name: 'ORA',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2324',
    name: 'Orion Group',
    short_name: 'ORN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2325',
    name: 'PHX Minerals',
    short_name: 'PHX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2326',
    name: 'Sturm Ruger&Company',
    short_name: 'RGR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2327',
    name: 'Sun Life Financial',
    short_name: 'SLF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2328',
    name: 'Constellation Brands B',
    short_name: 'STZb',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2329',
    name: 'Toronto Dominion Bank',
    short_name: 'TD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2330',
    name: 'Ampco-Pittsburgh',
    short_name: 'AP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2331',
    name: 'AngloGold Ashanti ADR',
    short_name: 'AU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2332',
    name: 'BlueLinx',
    short_name: 'BXC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2333',
    name: 'Cai',
    short_name: 'CAI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2334',
    name: 'Veris Residential',
    short_name: 'CLI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2335',
    name: 'Clearwater Paper',
    short_name: 'CLW',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2336',
    name: 'Global Cord Blood',
    short_name: 'CO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2337',
    name: 'Callon Petroleum',
    short_name: 'CPE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2338',
    name: 'Carriage Services',
    short_name: 'CSV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2339',
    name: 'Delek US Energy',
    short_name: 'DK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2340',
    name: 'El Paso Electric',
    short_name: 'EE_old',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2341',
    name: 'ESCO Technologies',
    short_name: 'ESE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2342',
    name: 'Evercore',
    short_name: 'EVR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2343',
    name: 'Archrock',
    short_name: 'AROC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2344',
    name: 'Endeavour Silver',
    short_name: 'EXK',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2345',
    name: 'Phoenix New Media',
    short_name: 'FENG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2346',
    name: 'Flotek',
    short_name: 'FTK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2347',
    name: 'Gildan Activewear',
    short_name: 'GIL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2348',
    name: 'Global Ship Lease',
    short_name: 'GSL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2349',
    name: 'Hill-Rom',
    short_name: 'HRC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2350',
    name: 'Miller Industries',
    short_name: 'MLR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2351',
    name: 'Molina Healthcare',
    short_name: 'MOH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2352',
    name: 'Newpark Resources',
    short_name: 'NR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2353',
    name: 'Oxford Industries',
    short_name: 'OXM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2354',
    name: 'PS Business Parks',
    short_name: 'PSB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2355',
    name: 'Pretium Resources',
    short_name: 'PVG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2356',
    name: 'Acres Commercial Realty',
    short_name: 'ACR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2357',
    name: 'Boston Beer',
    short_name: 'SAM',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2358',
    name: 'Stifel',
    short_name: 'SF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2359',
    name: 'STMicroelectronics ADR',
    short_name: 'STM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2360',
    name: 'ARMOUR Residential',
    short_name: 'ARR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2361',
    name: 'Biglari',
    short_name: 'BH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2362',
    name: 'Bitauto',
    short_name: 'BITA',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2363',
    name: 'Bank of Nova Scotia',
    short_name: 'BNS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2364',
    name: 'Beazer Homes USA',
    short_name: 'BZH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2365',
    name: 'Core Laboratories',
    short_name: 'CLB',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2366',
    name: 'CoreSite',
    short_name: 'COR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2367',
    name: 'Daqo New Energy ADR',
    short_name: 'DQ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2368',
    name: 'Dycom Industries',
    short_name: 'DY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2369',
    name: 'Flagstar Bancorp',
    short_name: 'FBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2370',
    name: 'Hilltop',
    short_name: 'HTH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2371',
    name: 'Interxion Holding NV',
    short_name: 'INXN',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2372',
    name: 'Ion Geophysical',
    short_name: 'IO',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2373',
    name: 'Koppers',
    short_name: 'KOP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2374',
    name: 'Kronos Worldwide',
    short_name: 'KRO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2375',
    name: 'Quaker Chemical',
    short_name: 'KWR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2376',
    name: 'Mercury General',
    short_name: 'MCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2377',
    name: 'McCormick & Comp',
    short_name: 'MKCv',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2378',
    name: 'Manning&Napier',
    short_name: 'MN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2379',
    name: 'Marine Products',
    short_name: 'MPX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2380',
    name: 'Myers Industries',
    short_name: 'MYE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2381',
    name: 'NACCO Industries',
    short_name: 'NC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2382',
    name: 'Ocwen',
    short_name: 'OCN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2383',
    name: 'OMNOVA',
    short_name: 'OMN_old',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2384',
    name: 'Douglas Dynamics',
    short_name: 'PLOW',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2385',
    name: 'Sonic Automotive',
    short_name: 'SAH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2386',
    name: 'Sonoco Products',
    short_name: 'SON',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2387',
    name: 'Acadia',
    short_name: 'AKR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2388',
    name: 'Atlantic Power',
    short_name: 'AT',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2389',
    name: 'Brown Forman A',
    short_name: 'BFa',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2390',
    name: 'Bank of Hawaii',
    short_name: 'BOH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2391',
    name: 'BRF ADR',
    short_name: 'BRFS',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2392',
    name: 'Caleres',
    short_name: 'CAL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2393',
    name: 'Cincinnati Bell',
    short_name: 'CBB',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2394',
    name: 'CIT',
    short_name: 'CIT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2395',
    name: 'SEACOR',
    short_name: 'CKH',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2396',
    name: 'Cantel Medical',
    short_name: 'CMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2397',
    name: 'Credit Suisse ADR',
    short_name: 'CS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2398',
    name: 'Curtiss-Wright',
    short_name: 'CW',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2399',
    name: 'LCI Industries',
    short_name: 'LCII',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2400',
    name: 'Eagle Materials',
    short_name: 'EXP',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2401',
    name: 'Federal Signal',
    short_name: 'FSS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2402',
    name: 'Gamco',
    short_name: 'GBL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2403',
    name: 'Gray Television',
    short_name: 'GTN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2404',
    name: 'HudBay Minerals',
    short_name: 'HBM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2405',
    name: 'Howard Hughes',
    short_name: 'HHC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2406',
    name: 'Intrepid Potash',
    short_name: 'IPI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2407',
    name: 'John Wiley&Sons',
    short_name: 'JWa',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2408',
    name: 'John Wiley&Sons B',
    short_name: 'JWb',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2409',
    name: 'Tailored Brands',
    short_name: 'TLRDQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2410',
    name: 'Nautilus',
    short_name: 'NLS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2411',
    name: 'Rtw Retailwinds',
    short_name: 'RTW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2412',
    name: 'Pacific Drilling',
    short_name: 'PACDQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2413',
    name: 'PAR Technology',
    short_name: 'PAR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2414',
    name: 'Shell ADR',
    short_name: 'RDSa',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2415',
    name: 'Shell B',
    short_name: 'RDSb',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2416',
    name: 'istar Inc',
    short_name: 'STAR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2417',
    name: 'Fang Holdings',
    short_name: 'SFUN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2418',
    name: 'SID Nacional ADR',
    short_name: 'SID',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2419',
    name: 'STAG Industrial',
    short_name: 'STAG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2420',
    name: 'Scorpio Tankers',
    short_name: 'STNG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2421',
    name: 'Sun',
    short_name: 'SUI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2422',
    name: 'Taubman Centers',
    short_name: 'TCO',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2423',
    name: 'Resolute Forest Products',
    short_name: 'RFP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2424',
    name: 'ABM Industries',
    short_name: 'ABM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2425',
    name: 'Arbor',
    short_name: 'ABR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2426',
    name: 'AerCap Holdings NV',
    short_name: 'AER',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2427',
    name: 'CLARIVATE',
    short_name: 'CLVT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2428',
    name: 'Cellcom',
    short_name: 'CELJF',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2429',
    name: 'CNA Financial',
    short_name: 'CNA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2430',
    name: 'CSS Industries',
    short_name: 'CSS_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2431',
    name: 'Cenovus Energy Inc',
    short_name: 'CVE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2432',
    name: 'Donaldson',
    short_name: 'DCI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2433',
    name: 'Dolby Labs',
    short_name: 'DLB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2434',
    name: 'Diana Shipping',
    short_name: 'DSX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2435',
    name: 'Eldorado Gold',
    short_name: 'EGO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2436',
    name: 'Callaway Golf',
    short_name: 'ELY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2437',
    name: 'FTI Consulting',
    short_name: 'FCN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2438',
    name: 'Forestar',
    short_name: 'FOR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2439',
    name: 'Gardner Denver',
    short_name: 'GDI',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2440',
    name: 'Greif Bros B',
    short_name: 'GEFb',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2441',
    name: 'GP Strategies',
    short_name: 'GPX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2442',
    name: 'HNI',
    short_name: 'HNI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2443',
    name: 'Huaneng Power',
    short_name: 'HNP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2444',
    name: 'LTC Properties',
    short_name: 'LTC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2445',
    name: 'Lsb Industries',
    short_name: 'LXU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2446',
    name: 'Southwest Gas Hold',
    short_name: 'SWX',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2447',
    name: 'SunCoke Energy',
    short_name: 'SXC',
    country: 'united-states',
    sector: 'Conglomerates',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2448',
    name: 'Agree Realty',
    short_name: 'ADC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2449',
    name: 'Acuity Brands',
    short_name: 'AYI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2450',
    name: 'HighPoint',
    short_name: 'HPR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2451',
    name: 'Brown&Brown',
    short_name: 'BRO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2452',
    name: 'Clean Harbors',
    short_name: 'CLH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2453',
    name: 'Crawford&Co',
    short_name: 'CRDa',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2454',
    name: 'Crawford&Comp D',
    short_name: 'CRDb',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2455',
    name: 'Blackstone Mortgage',
    short_name: 'BXMT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2456',
    name: 'Equity Commonwealth',
    short_name: 'EQC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2457',
    name: 'DHI Group',
    short_name: 'DHX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2458',
    name: 'Domino\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s Pizza Inc',
    short_name: 'DPZ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2459',
    name: 'Dynex Capital',
    short_name: 'DX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2460',
    name: 'Vaalco Energy',
    short_name: 'EGY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2461',
    name: 'Orange ADR',
    short_name: 'ORAN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2462',
    name: 'Gray Television A',
    short_name: 'GTNa',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2463',
    name: 'Getty',
    short_name: 'GTY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2464',
    name: 'Hyatt',
    short_name: 'H',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2465',
    name: 'HSBC ADR',
    short_name: 'HSBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2466',
    name: 'Hecla Mining',
    short_name: 'HL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2467',
    name: 'Turquoise Hill Resources',
    short_name: 'TRQ',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2468',
    name: 'Jagged Peak Energy',
    short_name: 'JAG_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2469',
    name: 'Kosmos Energy',
    short_name: 'KOS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2470',
    name: 'Lithia Motors',
    short_name: 'LAD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2471',
    name: 'Spire',
    short_name: 'SR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2472',
    name: 'MDU Resources',
    short_name: 'MDU',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2473',
    name: 'Mistras',
    short_name: 'MG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2474',
    name: 'NL Industries',
    short_name: 'NL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2475',
    name: 'Noah',
    short_name: 'NOAH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2476',
    name: 'NeoPhotonics',
    short_name: 'NPTN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2477',
    name: 'NorthWestern',
    short_name: 'NWE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '2478',
    name: 'Owens&Minor',
    short_name: 'OMI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2479',
    name: 'ProAssurance',
    short_name: 'PRA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2480',
    name: 'PROS',
    short_name: 'PRO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2481',
    name: 'Quad Graphics',
    short_name: 'QUAD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2482',
    name: 'Regal Beloit',
    short_name: 'RBC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2483',
    name: 'RLJ Lodging',
    short_name: 'RLJ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2484',
    name: 'Relx ADR',
    short_name: 'RELX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2485',
    name: 'Redwood',
    short_name: 'RWT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2486',
    name: 'LS Starrett',
    short_name: 'SCX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2487',
    name: 'Acco Brands',
    short_name: 'ACCO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2488',
    name: 'Barnes',
    short_name: 'B',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2489',
    name: 'BHP Group ADR',
    short_name: 'BBL',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2490',
    name: 'Saul Centers',
    short_name: 'BFS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2491',
    name: 'Black Hills',
    short_name: 'BKH',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2492',
    name: 'Badger Meter',
    short_name: 'BMI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2493',
    name: 'Bank of Montreal',
    short_name: 'BMO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2494',
    name: 'BRT',
    short_name: 'BRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2495',
    name: 'Bancorpsouth Bank',
    short_name: 'BXS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2496',
    name: 'Boyd Gaming',
    short_name: 'BYD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2497',
    name: 'Copa',
    short_name: 'CPA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2498',
    name: 'Carnival ADS',
    short_name: 'CUK',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2499',
    name: 'DHT Holdings Inc',
    short_name: 'DHT',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2500',
    name: 'Leaf Group',
    short_name: 'LEAF',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2501',
    name: 'Enzo Biochem',
    short_name: 'ENZ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2502',
    name: 'GNC',
    short_name: 'GNC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2503',
    name: 'Haemonetics',
    short_name: 'HAE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2504',
    name: 'Encompass Health',
    short_name: 'EHC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2505',
    name: 'MDC',
    short_name: 'MDC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2506',
    name: 'Movado',
    short_name: 'MOV',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2507',
    name: 'Vail Resorts',
    short_name: 'MTN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2508',
    name: 'Neenah Paper',
    short_name: 'NP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2509',
    name: 'Enpro Industries',
    short_name: 'NPO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2510',
    name: 'Pampa Energia ADR',
    short_name: 'PAM',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2511',
    name: 'Radian',
    short_name: 'RDN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2512',
    name: 'Safe Bulkers',
    short_name: 'SB',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2513',
    name: 'Skechers',
    short_name: 'SKX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2514',
    name: 'Stage Stores',
    short_name: 'SSI_old',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2515',
    name: 'Sterling Bancorp',
    short_name: 'STL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2516',
    name: 'Alamo',
    short_name: 'ALG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2517',
    name: 'EMCOR',
    short_name: 'EME',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2518',
    name: 'FutureFuel',
    short_name: 'FF',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2519',
    name: 'Fly Leasing',
    short_name: 'FLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2520',
    name: 'Franco-Nevada',
    short_name: 'FNV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2521',
    name: 'Greif Bros',
    short_name: 'GEF',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2522',
    name: 'Harte Hanks',
    short_name: 'HHS_old',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2523',
    name: 'Hillenbrand',
    short_name: 'HI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2524',
    name: 'Plantronics',
    short_name: 'POLY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2525',
    name: 'Air Lease',
    short_name: 'AL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2526',
    name: 'Alexanders',
    short_name: 'ALX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2527',
    name: 'AptarGroup',
    short_name: 'ATR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2528',
    name: 'BankUnited',
    short_name: 'BKU',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2529',
    name: 'Banco Macro B ADR',
    short_name: 'BMA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2530',
    name: 'Chicos FAS',
    short_name: 'CHS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2531',
    name: 'CVR Energy',
    short_name: 'CVI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2532',
    name: 'Dine Brands Global',
    short_name: 'DIN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2533',
    name: 'H B Fuller',
    short_name: 'FUL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2534',
    name: 'Integer Hld',
    short_name: 'ITGR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2535',
    name: 'Green Dot',
    short_name: 'GDOT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2536',
    name: 'Geo',
    short_name: 'GEO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2537',
    name: 'NewMarket',
    short_name: 'NEU',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2538',
    name: 'Stoneridge',
    short_name: 'SRI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2539',
    name: 'TransAlta Corp',
    short_name: 'TAC',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2540',
    name: 'Aircastle',
    short_name: 'AYR_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2541',
    name: 'Credicorp',
    short_name: 'BAP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2542',
    name: 'Celestica Inc.',
    short_name: 'CLS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2543',
    name: 'Costamare',
    short_name: 'CMRE',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2544',
    name: 'Dril-Quip',
    short_name: 'DRQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2545',
    name: 'Envestnet',
    short_name: 'ENV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2546',
    name: 'First Bancorp',
    short_name: 'FBP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2547',
    name: 'Frontline',
    short_name: 'FRO',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2548',
    name: 'CGI Inc',
    short_name: 'GIB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2549',
    name: 'Hubbell',
    short_name: 'HUBB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2550',
    name: 'MarineMax',
    short_name: 'HZO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2551',
    name: 'Invacare',
    short_name: 'IVC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2552',
    name: 'JMP',
    short_name: 'JMP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2553',
    name: 'Lennar B',
    short_name: 'LENb',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2554',
    name: 'Materion',
    short_name: 'MTRN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2555',
    name: 'MaxLinear',
    short_name: 'MXL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2556',
    name: 'Insperity',
    short_name: 'NSP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2557',
    name: 'Primerica',
    short_name: 'PRI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2558',
    name: 'Rite Aid',
    short_name: 'RAD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2559',
    name: 'Rosetta Stone',
    short_name: 'RST',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2560',
    name: 'Steelcase',
    short_name: 'SCS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2561',
    name: 'Semgroup',
    short_name: 'SEMG_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2562',
    name: 'Adecoagro SA',
    short_name: 'AGRO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2563',
    name: 'Dallasnews',
    short_name: 'DALN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '2564',
    name: 'Ameresco',
    short_name: 'AMRC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2565',
    name: 'Brinks',
    short_name: 'BCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2566',
    name: 'Barclays ADR',
    short_name: 'BCS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2567',
    name: 'Cambrex',
    short_name: 'CBM_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2568',
    name: 'Citizens',
    short_name: 'CIA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2569',
    name: 'Artivion',
    short_name: 'CRY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2570',
    name: 'Ducommun',
    short_name: 'DCO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2571',
    name: 'Griffon',
    short_name: 'GFF',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2572',
    name: 'Genie Energy',
    short_name: 'GNE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2573',
    name: 'Heico A',
    short_name: 'HEIa',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2574',
    name: 'IAMGold',
    short_name: 'IAG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2575',
    name: 'ING ADR',
    short_name: 'ING',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2576',
    name: 'St Joe',
    short_name: 'JOE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2577',
    name: 'La-Z-Boy',
    short_name: 'LZB',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2578',
    name: 'Marcus',
    short_name: 'MCS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2579',
    name: 'MEDIFAST',
    short_name: 'MED',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2580',
    name: 'Avient Corp',
    short_name: 'AVNT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2581',
    name: 'Seadrill Ltd',
    short_name: 'SDRLF',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2582',
    name: 'Skyline',
    short_name: 'SKY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2583',
    name: 'ReneSola',
    short_name: 'SOL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2584',
    name: 'Atlas Corp',
    short_name: 'ATCO',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2585',
    name: 'Global Industrial Co',
    short_name: 'GIC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2586',
    name: 'TrueBlue',
    short_name: 'TBI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2587',
    name: 'Avista',
    short_name: 'AVA',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2588',
    name: 'Chemed',
    short_name: 'CHE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2589',
    name: 'Danaos',
    short_name: 'DAC',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2590',
    name: 'Diebold',
    short_name: 'DBD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2591',
    name: 'Deluxe',
    short_name: 'DLX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2592',
    name: 'Embraer ADR',
    short_name: 'ERJ',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2593',
    name: 'Express',
    short_name: 'EXPR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2594',
    name: 'Genpact',
    short_name: 'G',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2595',
    name: 'Genesco',
    short_name: 'GCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2596',
    name: 'Aerojet Rocketdyne',
    short_name: 'AJRD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2597',
    name: 'Harsco',
    short_name: 'HSC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2598',
    name: 'Hexcel',
    short_name: 'HXL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2599',
    name: 'IDACORP',
    short_name: 'IDA',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2600',
    name: 'Kemper',
    short_name: 'KMPR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2601',
    name: 'Markel',
    short_name: 'MKL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2602',
    name: 'Maximus',
    short_name: 'MMS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2603',
    name: 'Meritor',
    short_name: 'MTOR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2604',
    name: 'Natuzzi',
    short_name: 'NTZ',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2605',
    name: 'Novartis ADR',
    short_name: 'NVS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2606',
    name: 'Pearson ADR',
    short_name: 'PSO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2607',
    name: 'Rogers',
    short_name: 'ROG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2608',
    name: 'Stepan',
    short_name: 'SCL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2609',
    name: 'Synnex',
    short_name: 'SNX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2610',
    name: 'StarTek',
    short_name: 'SRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2611',
    name: 'STERIS',
    short_name: 'STE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2612',
    name: 'Stantec',
    short_name: 'STN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2613',
    name: 'Equinor ADR',
    short_name: 'EQNR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2614',
    name: 'Allete',
    short_name: 'ALE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2615',
    name: 'AMREP',
    short_name: 'AXR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2616',
    name: 'Belden',
    short_name: 'BDC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2617',
    name: 'Brady',
    short_name: 'BRC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2618',
    name: 'Cato',
    short_name: 'CATO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2619',
    name: 'Cabot Corp',
    short_name: 'CBT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2620',
    name: 'Crane',
    short_name: 'CR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2621',
    name: 'Cubic',
    short_name: 'CUB',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2622',
    name: 'Diageo ADR',
    short_name: 'DEO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2623',
    name: 'Glatfelter',
    short_name: 'GLT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2624',
    name: 'Heico',
    short_name: 'HEI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2625',
    name: 'Inphi',
    short_name: 'IPHI',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '2626',
    name: 'Kadant',
    short_name: 'KAI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2627',
    name: 'Kemet',
    short_name: 'KEM_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2628',
    name: 'Lydall',
    short_name: 'LDL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2629',
    name: 'Mednax',
    short_name: 'MD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2630',
    name: 'Moog',
    short_name: 'MOGa',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2631',
    name: 'Moog B',
    short_name: 'MOGb',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2632',
    name: 'MasTec',
    short_name: 'MTZ',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2633',
    name: 'Nelnet',
    short_name: 'NNI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2634',
    name: 'Revlon',
    short_name: 'REV',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2635',
    name: 'Regis',
    short_name: 'RGS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2636',
    name: 'Calix',
    short_name: 'CALX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2637',
    name: 'CNOOC ADR',
    short_name: 'CEO',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2638',
    name: 'Cott',
    short_name: 'COT',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2639',
    name: 'CubeSmart',
    short_name: 'CUBE',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2640',
    name: 'Cosan Ltd',
    short_name: 'CZZ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2641',
    name: 'Ennis',
    short_name: 'EBF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2642',
    name: 'Edenor ADR',
    short_name: 'EDN',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2643',
    name: 'Graco',
    short_name: 'GGG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '2944',
    name: 'Konami Holdings',
    short_name: 'KNMCY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2945',
    name: 'Nippon ADR',
    short_name: 'NTTYY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2946',
    name: 'Makita',
    short_name: 'MKTAY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2947',
    name: 'Mitsui & Company',
    short_name: 'MITSY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2948',
    name: 'Wacoal',
    short_name: 'WACLY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2949',
    name: 'China Sunergy Co',
    short_name: 'CSUNY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2950',
    name: 'Hong Kong TV Network',
    short_name: 'HKTVY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2951',
    name: 'Rediff.com India',
    short_name: 'REDFY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2952',
    name: 'Promotora De Informaciones',
    short_name: 'PRISY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2953',
    name: 'Aviva ADR',
    short_name: 'AVVIY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2954',
    name: 'Bank Of Queensland ADR',
    short_name: 'BKQNY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2955',
    name: 'Sonic Healthcare ADR',
    short_name: 'SKHHY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2956',
    name: 'Nidec',
    short_name: 'NJDCY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2957',
    name: 'ASX ADR',
    short_name: 'ASXFY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2958',
    name: 'Skanska B ADR',
    short_name: 'SKBSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2959',
    name: 'Fortum ADR',
    short_name: 'FOJCY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2960',
    name: 'Veolia ADR',
    short_name: 'VEOEY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2961',
    name: 'Yanzhou Coal Mining',
    short_name: 'YZCAY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2962',
    name: 'Coca Cola HBC ADR',
    short_name: 'CCHGY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2963',
    name: 'China Resources Power ADR',
    short_name: 'CRPJY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2964',
    name: 'Siemens ADR',
    short_name: 'SIEGY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2965',
    name: 'ZTE Corp ADR',
    short_name: 'ZTCOY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2966',
    name: 'Swedish Match Ab Ord',
    short_name: 'SWMAY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2967',
    name: 'Louis Vuitton ADR',
    short_name: 'LVMUY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2968',
    name: 'Mowi ADR',
    short_name: 'MHGVY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2969',
    name: 'Tencent ADR',
    short_name: 'TCEHY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2970',
    name: 'Gazprom DRC',
    short_name: 'OGZPY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2971',
    name: 'Pernod Ricard SA PK',
    short_name: 'PDRDY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2972',
    name: 'Air France KLM SA',
    short_name: 'AFLYY',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2973',
    name: 'AAC Technologies Holdings Inc',
    short_name: 'AACAY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2974',
    name: 'Electrolux B ADR',
    short_name: 'ELUXY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2975',
    name: 'AB SKF',
    short_name: 'SKFRY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2976',
    name: 'Abcam PLC PK',
    short_name: 'ABCZY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2977',
    name: 'Accor SA',
    short_name: 'ACCYY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2978',
    name: 'Adecco Group',
    short_name: 'AHEXY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2979',
    name: 'Adidas ADR',
    short_name: 'ADDYY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2980',
    name: 'Admiral Group ADR',
    short_name: 'AMIGY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2981',
    name: 'Advanced Info Service Public',
    short_name: 'AVIFY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2982',
    name: 'Aeon ADR',
    short_name: 'AONNY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2983',
    name: 'ageas SA/NV',
    short_name: 'AGESY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2984',
    name: 'AGL Energy',
    short_name: 'AGLXY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2985',
    name: 'Agricultural Bank of China PK',
    short_name: 'ACGBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2986',
    name: 'AIA ADR',
    short_name: 'AAGIY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2987',
    name: 'Airbus Group NV',
    short_name: 'EADSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2988',
    name: 'Aisin Seiki Co',
    short_name: 'ASEKY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2989',
    name: 'Ajinomoto ADR',
    short_name: 'AJINY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2990',
    name: 'Akbank Turk Anonim Sirketi',
    short_name: 'AKBTY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2991',
    name: 'Akzo Nobel ADR',
    short_name: 'AKZOY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2992',
    name: 'Alliance Global Group Inc',
    short_name: 'ALGGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2993',
    name: 'Allianz ADR',
    short_name: 'ALIZY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2994',
    name: 'Alpha Bank',
    short_name: 'ALBKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2995',
    name: 'Alstom PK',
    short_name: 'ALSMY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2996',
    name: 'Alumina Limited PK',
    short_name: 'AWCMY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2997',
    name: 'Amadeus IT Holding SA PK',
    short_name: 'AMADY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2998',
    name: 'ANA Holdings ADR',
    short_name: 'ALNPY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '2999',
    name: 'Anglo American Platinum ADR',
    short_name: 'ANGPY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3000',
    name: 'Anglo American ADR',
    short_name: 'NGLOY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3001',
    name: 'Anhui Conch Cement Co',
    short_name: 'AHCHY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3002',
    name: 'AP Moeller-Maersk AS',
    short_name: 'AMKBY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3003',
    name: 'Aperam PK',
    short_name: 'APEMY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3004',
    name: 'Arcadis NV',
    short_name: 'ARCAY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3005',
    name: 'Arkema ADR',
    short_name: 'ARKAY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3006',
    name: 'Aryzta AG PK',
    short_name: 'ARZTY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3007',
    name: 'AGC ADR',
    short_name: 'ASGLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3008',
    name: 'Asahi Kaisei Corp',
    short_name: 'AHKSY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3009',
    name: 'ASOS plc PK',
    short_name: 'ASOMY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3010',
    name: 'Assa Abloy AB',
    short_name: 'ASAZY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3011',
    name: 'Associated British Foods plc',
    short_name: 'ASBFY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3012',
    name: 'Astellas Pharma Inc',
    short_name: 'ALPMY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3013',
    name: 'Atlantia ADR',
    short_name: 'ATASY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3014',
    name: 'Atlas Copco AB',
    short_name: 'ATLKY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3015',
    name: 'ANZ Banking Group ADR',
    short_name: 'ANZBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3016',
    name: 'Avita Medical',
    short_name: 'RCEL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3017',
    name: 'Axa ADR',
    short_name: 'AXAHY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3018',
    name: 'BAE Systems PLC',
    short_name: 'BAESY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3019',
    name: 'Balfour Beatty ADR',
    short_name: 'BAFYY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3020',
    name: 'Banco Do Brasil SA',
    short_name: 'BDORY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3021',
    name: 'Bank Hapoalim ADR',
    short_name: 'BKHYY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3022',
    name: 'Bank China ADR',
    short_name: 'BACHY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3023',
    name: 'Bank of East Asia',
    short_name: 'BKEAY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3024',
    name: 'Bank Rakyat',
    short_name: 'BKRKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3025',
    name: 'Absa ADR',
    short_name: 'AGRPY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3026',
    name: 'BASF ADR',
    short_name: 'BASFY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3027',
    name: 'Bayer AG PK',
    short_name: 'BAYRY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3028',
    name: 'BMW ADR',
    short_name: 'BMWYY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3029',
    name: 'BB Seguridade Participacoes SA',
    short_name: 'BBSEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3030',
    name: 'Bezeq Corp',
    short_name: 'BZQIY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3031',
    name: 'Bidvest Group Ltd PK',
    short_name: 'BDVSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3032',
    name: 'BNP Paribas ADR',
    short_name: 'BNPQY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3033',
    name: 'BOC Hong Kong ADR',
    short_name: 'BHKLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3034',
    name: 'Bpost ADR',
    short_name: 'BPOSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3035',
    name: 'Brambles ADR',
    short_name: 'BXBLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3036',
    name: 'Bridgestone ADR',
    short_name: 'BRDCY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3037',
    name: 'British Land Company',
    short_name: 'BTLCY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3038',
    name: 'Bunzl plc',
    short_name: 'BZLFY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3039',
    name: 'Burberry Group Plc',
    short_name: 'BURBY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3040',
    name: 'BYD ADR',
    short_name: 'BYDDY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3041',
    name: 'C&C Group Plc',
    short_name: 'CCGGY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3042',
    name: 'Capgemini ADR',
    short_name: 'CGEMY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3043',
    name: 'CapitaLand',
    short_name: 'CLLDY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3044',
    name: 'Carlsberg AS',
    short_name: 'CABGY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3045',
    name: 'Carrefour SA PK',
    short_name: 'CRRFY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3046',
    name: 'Casino Guichard ADR',
    short_name: 'CGUSY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3047',
    name: 'Casio Computer ADR',
    short_name: 'CSIOY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3048',
    name: 'Cathay Pacific Airways ADR',
    short_name: 'CPCAY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3049',
    name: 'Central Japan Railway Co',
    short_name: 'CJPRY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3050',
    name: 'Centrica ADR',
    short_name: 'CPYYY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3051',
    name: 'China Construction Bank Corp',
    short_name: 'CICHY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3052',
    name: 'China Merchants Bank Co',
    short_name: 'CIHKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3053',
    name: 'China Overseas Land Investment',
    short_name: 'CAOVY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3054',
    name: 'China Shenhua Energy Co',
    short_name: 'CSUAY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3055',
    name: 'China State Construction Int Hold',
    short_name: 'CCOHY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3056',
    name: 'Chorus ADR',
    short_name: 'CHRYY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3057',
    name: 'Chow Tai Fook Jewellery Group',
    short_name: 'CJEWY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3058',
    name: 'Chr Hansen ADR',
    short_name: 'CHYHY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3059',
    name: 'Cielo SA',
    short_name: 'CIOXY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3060',
    name: 'City Developments',
    short_name: 'CDEVY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3061',
    name: 'Clariant AG',
    short_name: 'CLZNY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3062',
    name: 'Clicks Group',
    short_name: 'CLCGY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3063',
    name: 'Clinuvel Pharmaceuticals ADR',
    short_name: 'CLVLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3064',
    name: 'CLP Holdings',
    short_name: 'CLPHY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3065',
    name: 'Coca-Cola Amatil ADR',
    short_name: 'CCLAY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3066',
    name: 'CochLear ADR',
    short_name: 'CHEOY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3067',
    name: 'Etablissementen Franz Colruyt ADR',
    short_name: 'CUYTY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3068',
    name: 'Commercial International Bank',
    short_name: 'CIBEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3069',
    name: 'Commerzbank AG PK',
    short_name: 'CRZBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3070',
    name: 'Commonwealth Bank of Australia PK',
    short_name: 'CMWAY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3071',
    name: 'Compagnie Financiere Richemont',
    short_name: 'CFRUY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3072',
    name: 'Compass Group ADR',
    short_name: 'CMPGY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3073',
    name: 'Computershare ADR',
    short_name: 'CMSQY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3074',
    name: 'Continental AG PK',
    short_name: 'CTTAY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3075',
    name: 'CP Pokphand ADR',
    short_name: 'CPKPY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3076',
    name: 'Credit Agricole SA PK',
    short_name: 'CRARY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3077',
    name: 'CSL',
    short_name: 'CSLLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3078',
    name: 'Cyrela Brazil Realty SA',
    short_name: 'CYRBY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3079',
    name: 'Dai Nippon Printing ADR',
    short_name: 'DNPLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3080',
    name: 'Daiichi Sankyo ADR',
    short_name: 'DSNKY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3081',
    name: 'Daikin Industries ADR',
    short_name: 'DKILY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3082',
    name: 'Daito Trust Construction Co',
    short_name: 'DIFTY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3083',
    name: 'Daiwa House ADR',
    short_name: 'DWAHY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3084',
    name: 'Daiwa ADR',
    short_name: 'DSEEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3085',
    name: 'Danone PK',
    short_name: 'DANOY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3086',
    name: 'Danske Bank A/S ADR',
    short_name: 'DNKEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3087',
    name: 'Dassault Systemes SA',
    short_name: 'DASTY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3088',
    name: 'Davide Campari-Milano SpA',
    short_name: 'DVDCY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3089',
    name: 'DBS Group Holdings ADR',
    short_name: 'DBSDY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3090',
    name: 'Delek Group',
    short_name: 'DGRLY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3091',
    name: 'Denso ADR',
    short_name: 'DNZOY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3092',
    name: 'Deutsche Boerse ADR',
    short_name: 'DBOEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3093',
    name: 'Deutsche Lufthansa ADR',
    short_name: 'DLAKY',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3094',
    name: 'Deutsche Post AG',
    short_name: 'DPSGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3095',
    name: 'Deutsche Telekom ADR',
    short_name: 'DTEGY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3096',
    name: 'Direct Line Insurance',
    short_name: 'DIISY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3097',
    name: 'DNB Bank ASA',
    short_name: 'DNBBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3098',
    name: 'Pan Pacific Intl ADR',
    short_name: 'DQJCY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3099',
    name: 'Dongfeng Motor Group Co',
    short_name: 'DNFGY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3100',
    name: 'East Japan Railway ADR',
    short_name: 'EJPRY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3101',
    name: 'EDP Energias de Portugal ADR',
    short_name: 'EDPFY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3102',
    name: 'Eurobank Ergasias',
    short_name: 'EGFEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3103',
    name: 'Eisai Co ADR',
    short_name: 'ESALY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3104',
    name: 'Electricite de France SA',
    short_name: 'ECIFY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3105',
    name: 'Elekta ADR',
    short_name: 'EKTAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3106',
    name: 'Enagas SA',
    short_name: 'ENGGY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3107',
    name: 'ENEL Societa per Azioni',
    short_name: 'ENLAY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3108',
    name: 'ENN Energy Holdings',
    short_name: 'XNGSY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3109',
    name: 'EON SE',
    short_name: 'EONGY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3110',
    name: 'Erste Group Bank AG PK',
    short_name: 'EBKDY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3111',
    name: 'Essilor International SA',
    short_name: 'ESLOY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3112',
    name: 'YDUQS Participacoes ADR',
    short_name: 'YDUQY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3113',
    name: 'Eurocash SA PK',
    short_name: 'EUSHY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3114',
    name: 'Eutelsat ADR',
    short_name: 'ETCMY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3115',
    name: 'Evotec AG PK',
    short_name: 'EVTCY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3116',
    name: 'Experian plc PK',
    short_name: 'EXPGY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3117',
    name: 'Fanuc Corporation',
    short_name: 'FANUY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3118',
    name: 'Fast Retailing ADR',
    short_name: 'FRCOY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3119',
    name: 'Leonardo ADR',
    short_name: 'FINMY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3120',
    name: 'First Pacific Company',
    short_name: 'FPAFY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3121',
    name: 'Fletcher Building Ltd PK',
    short_name: 'FCREY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3122',
    name: 'Fortescue Metals ADR',
    short_name: 'FSUGY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3123',
    name: 'Foxtons Group PLC',
    short_name: 'FXTGY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3124',
    name: 'Fresenius ADR',
    short_name: 'FSNUY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3125',
    name: 'Fuchs Petrolub ADR',
    short_name: 'FUPBY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3126',
    name: 'Subaru ADR',
    short_name: 'FUJHY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3127',
    name: 'FUJIFILM Holdings Corp',
    short_name: 'FUJIY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3128',
    name: 'Fujitsu ADR',
    short_name: 'FJTSY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3129',
    name: 'G4S ADR',
    short_name: 'GFSZY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3130',
    name: 'Gazprom Neft ADR',
    short_name: 'GZPFY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3131',
    name: 'Engie ADR',
    short_name: 'ENGIY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3132',
    name: 'GEA Group AG',
    short_name: 'GEAGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3133',
    name: 'Geely Automobile ADR',
    short_name: 'GELYY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3134',
    name: 'Gemalto ADR',
    short_name: 'GTOMY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3135',
    name: 'Genmab AS',
    short_name: 'GMAB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3136',
    name: 'Genting Berhad',
    short_name: 'GEBHY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3137',
    name: 'Getinge Industrier AB',
    short_name: 'GNGBY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3138',
    name: 'Givaudan ADR',
    short_name: 'GVDNY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3139',
    name: 'Glencore ADR',
    short_name: 'GLNCY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3140',
    name: 'Great Wall Motor Company',
    short_name: 'GWLLY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3141',
    name: 'Greek Org of Football Prognostics',
    short_name: 'GOFPY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3142',
    name: 'Banorte ADR',
    short_name: 'GBOOY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3143',
    name: 'Grupo TMM SAB',
    short_name: 'GTMAY',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3144',
    name: 'Guangdong Investment',
    short_name: 'GGDVY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3145',
    name: 'H Lundbeck ADR',
    short_name: 'HLUYY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3146',
    name: 'Hachijuni Bank ADR',
    short_name: 'HACBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3147',
    name: 'Hang Lung Properties',
    short_name: 'HLPPY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3148',
    name: 'Hang Seng Bank',
    short_name: 'HSNGY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3149',
    name: 'Hannover Re',
    short_name: 'HVRRY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3150',
    name: 'HeidelbergCement ADR',
    short_name: 'HDELY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3151',
    name: 'Heineken NV',
    short_name: 'HEINY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3152',
    name: 'Hellenic Telecommunications Org',
    short_name: 'HLTOY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3153',
    name: 'Henderson Land Development',
    short_name: 'HLDCY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3154',
    name: 'Henkel AG & Co KGAA',
    short_name: 'HENKY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3155',
    name: 'H&M ADR',
    short_name: 'HNNMY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3156',
    name: 'Hermes International SA',
    short_name: 'HESAY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3157',
    name: 'Hino Motors ADR',
    short_name: 'HINOY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3158',
    name: 'Hitachi ADR',
    short_name: 'HTHIY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3159',
    name: 'Lafargeholcim ADR',
    short_name: 'HCMLY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3160',
    name: 'Hong Kong & China Gas ADR',
    short_name: 'HOKCY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3161',
    name: 'Hong Kong Exchange & Clearing',
    short_name: 'HKXCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3162',
    name: 'Hoya Corp',
    short_name: 'HOCPY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3163',
    name: 'Hugo Boss AG',
    short_name: 'BOSSY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3164',
    name: 'Husqvarna AB',
    short_name: 'HSQVY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3165',
    name: 'Hypera',
    short_name: 'HYPMY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3166',
    name: 'Iberdrola SA',
    short_name: 'IBDRY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3167',
    name: 'Impala Platinum Holdings Ltd PK',
    short_name: 'IMPUY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3168',
    name: 'Imperial Holdings Ltd PK',
    short_name: 'IHLDY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3169',
    name: 'Imperial Brands',
    short_name: 'IMBBY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3170',
    name: 'Incitec Pivot ADR',
    short_name: 'INCZY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3171',
    name: 'Indra Sistemas SA',
    short_name: 'ISMAY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3172',
    name: 'Inditex ADR',
    short_name: 'IDEXY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3173',
    name: 'Industrial Commercial Bank of China',
    short_name: 'IDCBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3174',
    name: 'Infineon ADR',
    short_name: 'IFNNY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3175',
    name: 'Informa ADR',
    short_name: 'IFJPY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3176',
    name: 'Ingenico Group ADR',
    short_name: 'INGIY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3177',
    name: 'Inpex ADR',
    short_name: 'IPXHY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3178',
    name: 'IAG ADR',
    short_name: 'ICAGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3179',
    name: 'Intertek Group Plc',
    short_name: 'IKTSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3180',
    name: 'Intesa Sanpaolo SpA PK',
    short_name: 'ISNPY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3181',
    name: 'Ipsen ADR',
    short_name: 'IPSEY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3182',
    name: 'Isuzu Motors',
    short_name: 'ISUZY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3183',
    name: 'Itochu ADR',
    short_name: 'ITOCY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3184',
    name: 'ITV ADR',
    short_name: 'ITVPY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3185',
    name: 'J Sainsbury PLC',
    short_name: 'JSAIY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3186',
    name: 'Jardine Matheson Holdings Ltd PK',
    short_name: 'JMHLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3187',
    name: 'Jardine Strategic Holdings Ltd PK',
    short_name: 'JSHLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3188',
    name: 'JBS SA',
    short_name: 'JBSAY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3189',
    name: 'Jeronimo Martins SGPS SA ADR',
    short_name: 'JRONY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3190',
    name: 'JGC Corp',
    short_name: 'JGCCY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3191',
    name: 'Johnson Matthey',
    short_name: 'JMPLY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3192',
    name: 'Norilskiy Nikel ADR',
    short_name: 'NILSY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3193',
    name: 'JSR Corp',
    short_name: 'JSCPY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3194',
    name: 'Julius Baer Group',
    short_name: 'JBAXY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3195',
    name: 'Kao ADR',
    short_name: 'KAOOY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3196',
    name: 'Kasikornbank OTC',
    short_name: 'KPCPY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3197',
    name: 'Kawasaki Heavy Industries ADR',
    short_name: 'KWHIY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3198',
    name: 'KBC Groep ADR',
    short_name: 'KBCSY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3199',
    name: 'KDDI Corp PK',
    short_name: 'KDDIY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3200',
    name: 'Keppel Corporation',
    short_name: 'KPELY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3201',
    name: 'Kering SA',
    short_name: 'PPRUY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3202',
    name: 'Kimberly-Clark de Mexico',
    short_name: 'KCDMY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3203',
    name: 'Kingfisher ADR',
    short_name: 'KGFHY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3204',
    name: 'Kirin Holdings Co',
    short_name: 'KNBWY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3205',
    name: 'Koc Holdings AS',
    short_name: 'KHOLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3206',
    name: 'Komatsu',
    short_name: 'KMTUY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3207',
    name: 'Kone Oyj ADR',
    short_name: 'KNYJY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3208',
    name: 'Konica Minolta Inc',
    short_name: 'KNCAY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3209',
    name: 'Koninklijke Ahold ADR',
    short_name: 'ADRNY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3210',
    name: 'Kubota ADR',
    short_name: 'KUBTY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3211',
    name: 'Kumba Iron Ore Ltd PK',
    short_name: 'KIROY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3212',
    name: 'Kunlun Energy Co Ltd PK',
    short_name: 'KLYCY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3213',
    name: 'Kuraray Co',
    short_name: 'KURRY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3214',
    name: 'Air Liquide ADR',
    short_name: 'AIQUY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3215',
    name: 'Legal & General Group Plc',
    short_name: 'LGGNY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3216',
    name: 'Lend Lease',
    short_name: 'LLESY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3217',
    name: 'Lenovo Group Ltd PK',
    short_name: 'LNVGY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3218',
    name: 'Li & Fung PK',
    short_name: 'LFUGY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3219',
    name: 'Liquefied Natural Gas Ltd PK',
    short_name: 'LNGLY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3220',
    name: 'Living Cell Technologies',
    short_name: 'LVCLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3221',
    name: 'Lixil Group Corp',
    short_name: 'JSGRY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3222',
    name: 'Localiza Rent A Car SA',
    short_name: 'LZRFY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3223',
    name: 'Lonmin plc PK',
    short_name: 'LNMIY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3224',
    name: 'Lonza Group AG',
    short_name: 'LZAGY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3225',
    name: 'L\u00e2\u20ac\u2122Oreal ADR',
    short_name: 'LRLCY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3226',
    name: 'Lukoil ADR',
    short_name: 'LUKOY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3227',
    name: 'Lynas Rare Earths ADR',
    short_name: 'LYSDY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3228',
    name: 'Macquarie Group ADR',
    short_name: 'MQBKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3229',
    name: 'Magyar Telekom Plc',
    short_name: 'MYTAY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3230',
    name: 'Mahanagar Telephone Nigam PK',
    short_name: 'MTENY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3231',
    name: 'Malayan Banking Berhad',
    short_name: 'MLYBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3232',
    name: 'Marfrig Global Foods SA',
    short_name: 'MRRTY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3233',
    name: 'Marks & Spencer Group Plc',
    short_name: 'MAKSY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3234',
    name: 'Marubeni ADR',
    short_name: 'MARUY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3235',
    name: 'Mazda Motor ADR',
    short_name: 'MZDAY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3236',
    name: 'Merck ADR',
    short_name: 'MKKGY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3237',
    name: 'Ceconomy ADR',
    short_name: 'MTTRY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3238',
    name: 'Neles Oyj',
    short_name: 'MXTOF',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3239',
    name: 'Michelin ADR',
    short_name: 'MGDDY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3240',
    name: 'Mitsubishi Corp.',
    short_name: 'MSBHF',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3241',
    name: 'Mitsubishi Electric ADR',
    short_name: 'MIELY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3242',
    name: 'Mitsubishi Estate ADR',
    short_name: 'MITEY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3243',
    name: 'Mitsubishi Tanabe Pharma Corp',
    short_name: 'MTZPY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3244',
    name: 'Monotaro Co',
    short_name: 'MONOY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3245',
    name: 'Mr Price Group',
    short_name: 'MRPLY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3246',
    name: 'MS&AD Insurance Group Holdings PK',
    short_name: 'MSADY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3247',
    name: 'MTN Group Ltd PK',
    short_name: 'MTNOY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3248',
    name: 'MTU Aero Engines AG',
    short_name: 'MTUAY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3249',
    name: 'Muenchener Rueckver Ges',
    short_name: 'MURGY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3250',
    name: 'Murata Manufacturing Inc',
    short_name: 'MRAAY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3251',
    name: 'Nampak',
    short_name: 'NPKLY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3252',
    name: 'Naspers ADR',
    short_name: 'NPSNY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3253',
    name: 'National Australia Bank ADR',
    short_name: 'NABZY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3254',
    name: 'Nedbank Group Ltd',
    short_name: 'NDBKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3255',
    name: 'Nestle ADR',
    short_name: 'NSRGY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3256',
    name: 'New World ADR',
    short_name: 'NDVLY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3257',
    name: 'Newcrest Mining Ltd PK',
    short_name: 'NCMGY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3258',
    name: 'Nikon Corp',
    short_name: 'NINOY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3259',
    name: 'Nippon Steel ADR',
    short_name: 'NPSCY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3260',
    name: 'Nippon Yusen Kabushiki Kaisha',
    short_name: 'NPNYY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3261',
    name: 'Nissan Motor ADR',
    short_name: 'NSANY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3262',
    name: 'Nitto Denko Corp',
    short_name: 'NDEKY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3263',
    name: 'Noble Group',
    short_name: 'NOBGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3264',
    name: 'Nokian Tyres ADR',
    short_name: 'NKRKY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3265',
    name: 'Nordea Bank ADR',
    short_name: 'NRDBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3266',
    name: 'Norsk Hydro ASA ADR',
    short_name: 'NHYDY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3267',
    name: 'Novozymes AS',
    short_name: 'NVZMY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3268',
    name: 'NSK ADR',
    short_name: 'NPSKY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3269',
    name: 'Polyus ADR',
    short_name: 'OPYGY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3270',
    name: 'Olympus Corp',
    short_name: 'OCPNY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3271',
    name: 'OMRON ADR',
    short_name: 'OMRNY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3272',
    name: 'OMV AG PK',
    short_name: 'OMVKY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3273',
    name: 'Ono Pharmaceutical Co',
    short_name: 'OPHLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3274',
    name: 'Orica ADR',
    short_name: 'OCLDY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3275',
    name: 'Orkla ASA ADR',
    short_name: 'ORKLY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3276',
    name: 'Otsuka ADR',
    short_name: 'OTSKY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3277',
    name: 'Panasonic Corp PK',
    short_name: 'PCRFY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3278',
    name: 'Pandora ADR',
    short_name: 'PANDY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3279',
    name: 'PCCW',
    short_name: 'PCCWY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3280',
    name: 'Persimmon Plc',
    short_name: 'PSMMY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3281',
    name: 'Petrofac ADR',
    short_name: 'POFCY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3282',
    name: 'PGS ADR',
    short_name: 'PGSVY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3283',
    name: 'Peugeot SA',
    short_name: 'PUGOY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3284',
    name: 'Ping An Insurance Company of China',
    short_name: 'PNGAY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3285',
    name: 'Piraeus Bank ADR',
    short_name: 'BPIRY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3286',
    name: 'Porsche Automobile Holding SE',
    short_name: 'POAHY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3287',
    name: 'Power Assets Holdings',
    short_name: 'HGKGY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3288',
    name: 'PPC ADR',
    short_name: 'PPCLY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3289',
    name: 'Prada Spa PK',
    short_name: 'PRDSY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3290',
    name: 'Harbour Energy ADR',
    short_name: 'HBRIY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3291',
    name: 'ProSiebenSat1 Media AG',
    short_name: 'PBSFY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3292',
    name: 'Astra Int',
    short_name: 'PTAIY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3293',
    name: 'Bank Mandiri Persero ADR',
    short_name: 'PPERY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3294',
    name: 'Kalbe Farma ADR',
    short_name: 'PTKFY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3295',
    name: 'Semen Persero',
    short_name: 'PSGTY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3296',
    name: 'United Tractors ADR',
    short_name: 'PUTKY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3297',
    name: 'Publicis Groupe SA',
    short_name: 'PUBGY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3298',
    name: 'QBE Insurance Group ADR',
    short_name: 'QBIEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3299',
    name: 'Randstad Holdings NV',
    short_name: 'RANJY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3300',
    name: 'Reckitt Benckiser ADR',
    short_name: 'RBGLY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3301',
    name: 'Red Electrica ADR',
    short_name: 'RDEIY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3302',
    name: 'Rentokil ADR',
    short_name: 'RTOKY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3303',
    name: 'Repsol SA',
    short_name: 'REPYY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3304',
    name: 'Rheinmetall ADR',
    short_name: 'RNMBY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3305',
    name: 'Rib Software AG PK',
    short_name: 'RSTAY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3306',
    name: 'Ricoh Company',
    short_name: 'RICOY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3307',
    name: 'Robinsons Retail Holdings Inc',
    short_name: 'RRETY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3308',
    name: 'Roche Holding ADR',
    short_name: 'RHHBY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3309',
    name: 'Rohm ADR',
    short_name: 'ROHCY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3310',
    name: 'Rolls Royce Holdings plc',
    short_name: 'RYCEY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3311',
    name: 'Rostelekom DRC',
    short_name: 'ROSYY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3312',
    name: 'Koninklijke DSM ADR',
    short_name: 'RDSMY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3313',
    name: 'Koninklijke ADR',
    short_name: 'KKPNY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3314',
    name: 'Royal Mail ADR',
    short_name: 'ROYMY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3315',
    name: 'RSA Insurance ADR',
    short_name: 'RSNAY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3316',
    name: 'RusHydro ADR',
    short_name: 'RSHYY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3317',
    name: 'RWE AG PK',
    short_name: 'RWEOY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3318',
    name: 'Ryohin Keikaku Co',
    short_name: 'RYKKY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3319',
    name: 'Safran SA',
    short_name: 'SAFRY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3320',
    name: 'Sage ADR',
    short_name: 'SGPYY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3321',
    name: 'Sampo OYJ',
    short_name: 'SAXPY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3322',
    name: 'Sands China ADR',
    short_name: 'SCHYY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3323',
    name: 'Sandvik AB ADR',
    short_name: 'SDVKY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3324',
    name: 'Sanlam Ltd PK',
    short_name: 'SLLDY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3325',
    name: 'Santen Pharmaceutical Co',
    short_name: 'SNPHY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3326',
    name: 'Santos ADR',
    short_name: 'SSLZY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3327',
    name: 'Sappi Ltd ADR',
    short_name: 'SPPJY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3328',
    name: 'Sberbank',
    short_name: 'SBRCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3329',
    name: 'Schneider Electric SA',
    short_name: 'SBGSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3330',
    name: 'SCOR PK',
    short_name: 'SCRYY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3331',
    name: 'Secom ADR',
    short_name: 'SOMLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3332',
    name: 'Sega Sammy ADR',
    short_name: 'SGAMY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3333',
    name: 'Seiko Epson ADR',
    short_name: 'SEKEY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3334',
    name: 'Sekisui House ADR',
    short_name: 'SKHSY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3335',
    name: 'Seven i ADR',
    short_name: 'SVNDY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3336',
    name: 'Severn Trent PLC PK',
    short_name: 'STRNY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3337',
    name: 'SGS SA',
    short_name: 'SGSOY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3338',
    name: 'Sharp ADR',
    short_name: 'SHCAY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3339',
    name: 'Shin-Etsu Chemical ADR',
    short_name: 'SHECY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3340',
    name: 'Shiseido Company',
    short_name: 'SSDOY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3341',
    name: 'Shoprite ADR',
    short_name: 'SRGHY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3342',
    name: 'Sims Metal Management Ltd PK',
    short_name: 'SMSMY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3343',
    name: 'Singapore Airlines',
    short_name: 'SINGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3344',
    name: 'Singapore Telecommunications PK',
    short_name: 'SGAPY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3345',
    name: 'SMC Corp Japan',
    short_name: 'SMCAY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3346',
    name: 'Smiths Group Plc',
    short_name: 'SMGZY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3347',
    name: 'Snam ADR',
    short_name: 'SNMRY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3348',
    name: 'Societe Generale ADR',
    short_name: 'SCGLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3349',
    name: 'Sodexo PK',
    short_name: 'SDXAY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3350',
    name: 'SoftBank Group',
    short_name: 'SFTBY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3351',
    name: 'Sonova Holding AG',
    short_name: 'SONVY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3352',
    name: 'Sony Financial Holdings Inc',
    short_name: 'SNYFY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3353',
    name: 'Spark New Zealand ADR',
    short_name: 'SPKKY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3354',
    name: 'SSE ADR',
    short_name: 'SSEZY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3355',
    name: 'Standard Bank Group Ltd PK',
    short_name: 'SGBLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3356',
    name: 'Starpharma Holdings',
    short_name: 'SPHRY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3357',
    name: 'Stora Enso Oyj PK',
    short_name: 'SEOAY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3358',
    name: 'Subsea 7 ADR',
    short_name: 'SUBCY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3359',
    name: 'Suez SA',
    short_name: 'SZSAY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3360',
    name: 'Sumitomo ADR',
    short_name: 'SSUMY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3361',
    name: 'Sumitomo Metal ADR',
    short_name: 'SMMYY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3362',
    name: 'Sumitomo Mitsui Trust Holdings PK',
    short_name: 'SUTNY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3363',
    name: 'Sun Hung Kai Properties',
    short_name: 'SUHJY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3364',
    name: 'Suncorp Group ADR',
    short_name: 'SNMCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3365',
    name: 'Suntory Beverage & Food',
    short_name: 'STBFY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3366',
    name: 'Surgutneftegaz OAO',
    short_name: 'SGTPY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3367',
    name: 'Svenska Cellulosa AB',
    short_name: 'SVCBY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3368',
    name: 'Svenska Handelsbanken PK',
    short_name: 'SVNLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3369',
    name: 'Swatch Group AG',
    short_name: 'SWGAY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3370',
    name: 'Swedbank AB',
    short_name: 'SWDBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3371',
    name: 'Swire Pacific',
    short_name: 'SWRAY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3372',
    name: 'Swiss Re',
    short_name: 'SSREY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3373',
    name: 'SwissCom AG',
    short_name: 'SCMWY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3374',
    name: 'Symrise Ag PK',
    short_name: 'SYIEY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3375',
    name: 'Sysmex Corp',
    short_name: 'SSMXY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3376',
    name: 'Takeda Pharma ADR',
    short_name: 'TAK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3377',
    name: 'Tate & Lyle ADR',
    short_name: 'TATYY',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3378',
    name: 'Tatneft ADR',
    short_name: 'OAOFY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3379',
    name: 'Tav Havalimanlari Holding AS',
    short_name: 'TAVHY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3380',
    name: 'TDK ADR',
    short_name: 'TTDKY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3381',
    name: 'Technicolor',
    short_name: 'TCLRY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3382',
    name: 'Techtronic Industries ADR',
    short_name: 'TTNDY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3383',
    name: 'Teijin',
    short_name: 'TINLY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3384',
    name: 'Telenor ASA ADR',
    short_name: 'TELNY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3385',
    name: 'Teleperformance PK',
    short_name: 'TLPFY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3386',
    name: 'Telia ADR',
    short_name: 'TLSNY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3387',
    name: 'Telstra Corporation ADR',
    short_name: 'TLSYY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3388',
    name: 'Tenaga Nasional Berhad',
    short_name: 'TNABY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3389',
    name: 'Terna Rete Elettrica Nazionale',
    short_name: 'TEZNY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3390',
    name: 'Tesco PLC',
    short_name: 'TSCDY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3391',
    name: 'THK Co ADR',
    short_name: 'THKLY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3392',
    name: 'Tiger Brands Ltd PK',
    short_name: 'TBLMY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3393',
    name: 'TMK ADR',
    short_name: 'TMKXY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3394',
    name: 'Tokio Marine Holdings Inc',
    short_name: 'TKOMY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3395',
    name: 'Tokyo Electron Ltd PK',
    short_name: 'TOELY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3396',
    name: 'Tokyo Gas Co',
    short_name: 'TKGSY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3397',
    name: 'Topdanmark AS',
    short_name: 'TPDKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3398',
    name: 'Toppan Printing',
    short_name: 'TOPPY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3399',
    name: 'Toray Industries ADR',
    short_name: 'TRYIY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3400',
    name: 'Toshiba Corp PK',
    short_name: 'TOSYY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3401',
    name: 'Toto',
    short_name: 'TOTDY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3402',
    name: 'Toyota Industries Corporation',
    short_name: 'TYIDY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3403',
    name: 'TravelSky ADR',
    short_name: 'TSYHY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3404',
    name: 'Treasury Wine Estates Ltd PK',
    short_name: 'TSRYY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3405',
    name: 'Trend Micro ADR',
    short_name: 'TMICY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3406',
    name: 'Tsingtao Brewery Co',
    short_name: 'TSGTY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3407',
    name: 'Tullow Oil ADR',
    short_name: 'TUWOY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3408',
    name: 'Turkiye Garanti Bankasi AS',
    short_name: 'TKGBY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3409',
    name: 'UbiSoft Entertainment Inc',
    short_name: 'UBSFY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3410',
    name: 'UCB ADR',
    short_name: 'UCBJY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3411',
    name: 'Unicharm Corp',
    short_name: 'UNICY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3412',
    name: 'United Overseas Bank ADR',
    short_name: 'UOVEY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3413',
    name: 'United Utilities ADR',
    short_name: 'UUGRY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3414',
    name: 'UPM-Kymmene Corp',
    short_name: 'UPMKY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3415',
    name: 'Usinas Siderurgicas de Minas Gerais',
    short_name: 'USNZY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3416',
    name: 'Valeo ADR',
    short_name: 'VLEEY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3417',
    name: 'Vallourec SA',
    short_name: 'VLOWY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3418',
    name: 'Vestas Wind Systems AS',
    short_name: 'VWDRY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3419',
    name: 'Vinci ADR',
    short_name: 'VCISY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3420',
    name: 'Vivendi SA PK',
    short_name: 'VIVHY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3421',
    name: 'Vodacom Group Ltd PK',
    short_name: 'VDMCY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3422',
    name: 'Volkswagen Pref ADR',
    short_name: 'VWAPY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3423',
    name: 'VTech ADR',
    short_name: 'VTKLY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3424',
    name: 'Wal Mart de Mexico ADR',
    short_name: 'WMMVY',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3425',
    name: 'Weichai Power Company',
    short_name: 'WEICY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3426',
    name: 'Weir Group PLC',
    short_name: 'WEGRY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3427',
    name: 'Wesfarmers ADR',
    short_name: 'WFAFY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3428',
    name: 'West Japan Railway ADR',
    short_name: 'WJRYY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3429',
    name: 'Wharf Holdings',
    short_name: 'WARFY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3430',
    name: 'Wheelock & Co',
    short_name: 'WHLKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3431',
    name: 'Wienerberger Baustoffindustrie',
    short_name: 'WBRBY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3432',
    name: 'William Hill ADR',
    short_name: 'WIMHY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3433',
    name: 'Wilmar International',
    short_name: 'WLMIY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3434',
    name: 'WM Morrison ADR',
    short_name: 'MRWSY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3435',
    name: 'Ferguson ADR',
    short_name: 'FERGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3436',
    name: 'Wolters Kluwer NV',
    short_name: 'WTKWY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3437',
    name: 'Woodside Petroleum ADR',
    short_name: 'WOPEY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3438',
    name: 'Woolworths Holdings Ltd PK',
    short_name: 'WLWHY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3439',
    name: 'Worley Parsons',
    short_name: 'WYGPY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3440',
    name: 'Wynn Macau ADR',
    short_name: 'WYNMY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3441',
    name: 'Z Holdings ADR',
    short_name: 'YAHOY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3442',
    name: 'Yara International ASA',
    short_name: 'YARIY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3443',
    name: 'Yue Yuen Industrial Holdings',
    short_name: 'YUEIY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3444',
    name: 'Zurich Insurance Group',
    short_name: 'ZURVY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3445',
    name: 'Ashtead Gro',
    short_name: 'ASHTY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3446',
    name: 'Atlas Copco ADR',
    short_name: 'ATLCY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3447',
    name: 'Coloplast A',
    short_name: 'CLPBY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3448',
    name: 'Galp Energa',
    short_name: 'GLPEY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3449',
    name: 'Henkel Ag A',
    short_name: 'HENOY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3450',
    name: 'Klabin Sa A',
    short_name: 'KLBAY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3451',
    name: 'Cogna Educacao ADR',
    short_name: 'COGNY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3452',
    name: 'Nintendo ADR',
    short_name: 'NTDOY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3453',
    name: 'Surgutneftegaz ADR',
    short_name: 'SGTZY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3454',
    name: 'Smurfit Kappa',
    short_name: 'SMFKY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3455',
    name: 'Turkiye Vakiflar Bankasi ADR',
    short_name: 'TKYVY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3456',
    name: 'Volkswagen 10 Pref ADR',
    short_name: 'VWAGY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3457',
    name: 'South32 ADR',
    short_name: 'SOUHY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3458',
    name: 'DSV ADR',
    short_name: 'DSDVY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3459',
    name: 'Ferrovial',
    short_name: 'FRRVY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3460',
    name: 'Renault',
    short_name: 'RNLSY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3461',
    name: 'EasyJet ADR',
    short_name: 'ESYJY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3462',
    name: 'Essity ADR',
    short_name: 'ESSYY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3463',
    name: 'Rexel ADR',
    short_name: 'RXEEY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3464',
    name: 'Arcelik ADR',
    short_name: 'ACKAY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3465',
    name: 'ACS Actividades Construccion ADR',
    short_name: 'ACSAY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3466',
    name: 'Atos Origin ADR',
    short_name: 'AEXAY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3467',
    name: 'Air China ADR',
    short_name: 'AIRYY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3468',
    name: 'Alfa Laval ADR',
    short_name: 'ALFVY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3469',
    name: 'Ansell ADR',
    short_name: 'ANSLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3470',
    name: 'Advantest DRC',
    short_name: 'ATEYY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3471',
    name: 'Banca Mediolanum SPA ADR',
    short_name: 'BNCDY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3472',
    name: 'Brenntag ADR',
    short_name: 'BNTGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3473',
    name: 'Caixabank ADR',
    short_name: 'CAIXY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3474',
    name: 'CK Hutchison ADR',
    short_name: 'CKHUY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3475',
    name: 'ConvaTec ADR',
    short_name: 'CNVVY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3476',
    name: 'Compagnie Saint-Gobain ADR',
    short_name: 'CODYY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3477',
    name: 'DIDA ADR',
    short_name: 'DIDAY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3478',
    name: 'D&L Industries ADR',
    short_name: 'DLNDY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3479',
    name: 'Daimler ADR',
    short_name: 'DMLRY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3480',
    name: 'Edenred Malakoff ADR',
    short_name: 'EDNMY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3481',
    name: 'Paranaense Energia-Copel ADR',
    short_name: 'ELPVY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3482',
    name: 'Ford Otomoti Sanayi ADR',
    short_name: 'FOVSY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3483',
    name: 'Provident Financial ADR',
    short_name: 'FPLPY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3484',
    name: 'Fossal ADR',
    short_name: 'FSSLD',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3485',
    name: 'Naturgy Energy ADR',
    short_name: 'GASNY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3486',
    name: 'Gjensidige Forsikring ADR',
    short_name: 'GJNSY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3487',
    name: 'Hexagon ADR',
    short_name: 'HXGBY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3488',
    name: 'INDIVIOR ADR',
    short_name: 'INVVY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3489',
    name: 'Hyve Group PLC OTC',
    short_name: 'ITEGY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3490',
    name: 'Japan Tobacco ADR',
    short_name: 'JAPAY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3491',
    name: 'Japan Airlines ADR',
    short_name: 'JAPSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3492',
    name: 'Japan Exchange ADR',
    short_name: 'JPXGY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3493',
    name: 'Japan Airport Terminal ADR',
    short_name: 'JTTRY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3494',
    name: 'Kuehne Nagel ADR',
    short_name: 'KHNGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3495',
    name: 'K&S DRC',
    short_name: 'KPLUY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3496',
    name: 'London Stock Exchange ADR',
    short_name: 'LNSTY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3497',
    name: 'Meggitt ADR',
    short_name: 'MEGGY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3498',
    name: 'Mitie ADR',
    short_name: 'MITFY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3499',
    name: 'MorphoSys ADR',
    short_name: 'MOR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3500',
    name: 'NN ADR',
    short_name: 'NNGRY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3501',
    name: 'Overseas Chinese Banking ADR',
    short_name: 'OVCHY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3502',
    name: 'Flutter Entertainment ADR',
    short_name: 'PDYPY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3503',
    name: 'Park 24 ADR',
    short_name: 'PKCOY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3504',
    name: 'Premier Foods ADR',
    short_name: 'PRRFY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3505',
    name: 'XL Axiata ADR',
    short_name: 'PTXKY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3506',
    name: 'Rakuten ADR',
    short_name: 'RKUNY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3507',
    name: 'Rotork ADR',
    short_name: 'RTOXY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3508',
    name: 'D\u00e2\u20ac\u2122Ieteren ADR',
    short_name: 'SIETY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3509',
    name: 'Skandinaviska Enskilda Banken ADR',
    short_name: 'SKVKY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3510',
    name: 'Sumitomo Electric ADR',
    short_name: 'SMTOY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3511',
    name: 'Siam Commercial Bank ADR',
    short_name: 'SMUUY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3512',
    name: 'Sumitomo Chemical ADR',
    short_name: 'SOMMY',
    country: 'united-states',
    sector: 'Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3513',
    name: 'Singapore Exchange ADR',
    short_name: 'SPXCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3514',
    name: 'T&D ADR',
    short_name: 'TDHOY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3515',
    name: 'WH ADR',
    short_name: 'WHGLY',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3516',
    name: 'Yamaha DRC',
    short_name: 'YAMCY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3517',
    name: 'ZALANDO ADR',
    short_name: 'ZLNDY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3644',
    name: 'Olin',
    short_name: 'OLN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3645',
    name: 'Worthington Industries',
    short_name: 'WOR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3646',
    name: 'Domtar Corporation',
    short_name: 'UFS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3647',
    name: 'Huntsman',
    short_name: 'HUN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3648',
    name: 'RPM',
    short_name: 'RPM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3649',
    name: 'WR Grace&Co',
    short_name: 'GRA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3650',
    name: 'Westlake Chemical',
    short_name: 'WLK',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3651',
    name: 'Element Solutions',
    short_name: 'ESI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3652',
    name: 'Axalta Coating Systems',
    short_name: 'AXTA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3653',
    name: 'Chemours Co',
    short_name: 'CC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3654',
    name: 'GCP Applied Tech',
    short_name: 'GCP',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3655',
    name: 'Ingevity',
    short_name: 'NGVT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3656',
    name: 'AdvanSix',
    short_name: 'ASIX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3690',
    name: 'PRA Group Inc',
    short_name: 'PRAA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3691',
    name: 'Signature Bank',
    short_name: 'SBNY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3692',
    name: 'SEI',
    short_name: 'SEIC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3693',
    name: 'Texas Capital',
    short_name: 'TCBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3694',
    name: 'Trustmark',
    short_name: 'TRMK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3695',
    name: 'United Bankshares',
    short_name: 'UBSI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3696',
    name: 'UMB Financial',
    short_name: 'UMBF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3697',
    name: 'Umpquas',
    short_name: 'UMPQ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3698',
    name: 'Washington Federal',
    short_name: 'WAFD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3699',
    name: 'Wintrust',
    short_name: 'WTFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3700',
    name: 'Service Properties',
    short_name: 'SVC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3701',
    name: 'TCF Financial',
    short_name: 'TCF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3702',
    name: 'FNB',
    short_name: 'FNB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3703',
    name: 'RLI',
    short_name: 'RLI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3704',
    name: 'Washington RE Investment',
    short_name: 'WRE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3705',
    name: 'Western Alliance',
    short_name: 'WAL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3706',
    name: 'Webster Financial',
    short_name: 'WBS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3707',
    name: 'Healthcare of America',
    short_name: 'HTA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3708',
    name: 'Retail Properties of America',
    short_name: 'RPAI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3709',
    name: 'The Hanover Insurance',
    short_name: 'THG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3710',
    name: 'Valley National',
    short_name: 'VLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3711',
    name: 'White Mountains Insurance',
    short_name: 'WTM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3712',
    name: 'Alleghany',
    short_name: 'Y',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3713',
    name: 'Legg Mason',
    short_name: 'LM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3714',
    name: 'Weingarten Realty',
    short_name: 'WRI',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3715',
    name: 'Brookfield Property Reit',
    short_name: 'BPYU',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3716',
    name: 'Healthcare RT',
    short_name: 'HR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3717',
    name: 'Camden Property',
    short_name: 'CPT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3718',
    name: 'Douglas Emmett',
    short_name: 'DEI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3719',
    name: 'Eaton Vance',
    short_name: 'EV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3720',
    name: 'American Campus',
    short_name: 'ACC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3721',
    name: 'American Financial',
    short_name: 'AFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3722',
    name: 'WR Berkley',
    short_name: 'WRB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3723',
    name: 'Corporate Office Properties',
    short_name: 'OFC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3724',
    name: 'Tanger Factory Outlet Centers',
    short_name: 'SKT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3725',
    name: 'Piedmont Office',
    short_name: 'PDM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3726',
    name: 'CBL & Associates',
    short_name: 'CBLAQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3727',
    name: 'Fidelity Financial',
    short_name: 'FNF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3728',
    name: 'Old Republic',
    short_name: 'ORI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3729',
    name: 'Diversified Healthcare',
    short_name: 'DHC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3730',
    name: 'NewYork Community Bancorp',
    short_name: 'NYCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3731',
    name: 'Omega Healthcare',
    short_name: 'OHI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3732',
    name: 'Invesco Mortgage',
    short_name: 'IVR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3733',
    name: 'CoreCivic',
    short_name: 'CXW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3734',
    name: 'National Retail Properties',
    short_name: 'NNN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3735',
    name: 'Axis Capital',
    short_name: 'AXS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3736',
    name: 'Highwoods Properties',
    short_name: 'HIW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3737',
    name: 'Assured Guaranty',
    short_name: 'AGO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3738',
    name: 'First American',
    short_name: 'FAF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3739',
    name: 'Kilroy',
    short_name: 'KRC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3740',
    name: 'Rayonier',
    short_name: 'RYN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3741',
    name: 'Two Harbors',
    short_name: 'TWO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3742',
    name: 'Waddell&Reed Financial',
    short_name: 'WDR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3743',
    name: 'Anywhere RE',
    short_name: 'RLGY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3744',
    name: 'Arch Capital',
    short_name: 'ACGL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3745',
    name: 'Popular',
    short_name: 'BPOP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3746',
    name: 'CyrusOne',
    short_name: 'CONE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3747',
    name: 'Voya Financial Inc',
    short_name: 'VOYA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3748',
    name: 'New Residential Inv',
    short_name: 'NRZ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3749',
    name: 'Physicians Realty Trust',
    short_name: 'DOC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3750',
    name: 'Spirit Realty',
    short_name: 'SRC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3751',
    name: 'W P Carey Inc',
    short_name: 'WPC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3752',
    name: 'Gaming & Leisure Properties',
    short_name: 'GLPI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3753',
    name: 'Columbia Pr',
    short_name: 'CXP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3754',
    name: 'Brixmor Property',
    short_name: 'BRX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3755',
    name: 'Ally Financial Inc',
    short_name: 'ALLY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3756',
    name: 'Outfront Media',
    short_name: 'OUT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3757',
    name: 'Navient',
    short_name: 'NAVI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3758',
    name: 'Washington Prime',
    short_name: 'WPG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3759',
    name: 'Digitalbridge Group',
    short_name: 'DBRG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3760',
    name: 'AMH 4 Rent',
    short_name: 'AMH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3761',
    name: 'Store Capital Corp',
    short_name: 'STOR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3762',
    name: 'Paramount Group Inc',
    short_name: 'PGRE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3763',
    name: 'LendingClub Corp',
    short_name: 'LC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3764',
    name: 'Urban Edge Properties',
    short_name: 'UE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3765',
    name: 'Xenia Hotels & Resorts Inc',
    short_name: 'XHR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3766',
    name: 'Uniti Group',
    short_name: 'UNIT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3767',
    name: 'Apple Hospitality REIT',
    short_name: 'APLE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3768',
    name: 'Four Corners Property Trust Inc',
    short_name: 'FCPT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3769',
    name: 'Donnelley Financial Solutions',
    short_name: 'DFIN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3954',
    name: 'Bio-Techne',
    short_name: 'TECH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3955',
    name: 'West Pharmaceutical Services',
    short_name: 'WST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3956',
    name: 'Opko Health',
    short_name: 'OPK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3957',
    name: 'United Therapeutics',
    short_name: 'UTHR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3958',
    name: 'Bruker',
    short_name: 'BRKR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3959',
    name: 'Community Health Systems',
    short_name: 'CYH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3960',
    name: 'Brookdale Senior Living',
    short_name: 'BKD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3961',
    name: 'Intercept',
    short_name: 'ICPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3962',
    name: 'Bluebird',
    short_name: 'BLUE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3963',
    name: 'Portola',
    short_name: 'PTLA_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3964',
    name: 'Mallinckrodt',
    short_name: 'MNKKQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '3965',
    name: 'Precigen',
    short_name: 'PGEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3966',
    name: 'KKR & Co',
    short_name: 'KKR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3967',
    name: 'Agios Pharm',
    short_name: 'AGIO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3968',
    name: 'Ultragenyx',
    short_name: 'RARE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3969',
    name: 'Radius Heal',
    short_name: 'RDUS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '3970',
    name: 'Catalent Inc',
    short_name: 'CTLT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '3971',
    name: 'Avanos Medical',
    short_name: 'AVNS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4059',
    name: 'Weatherford',
    short_name: 'WFRD',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4060',
    name: 'Superior Energy Services',
    short_name: 'SPN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4061',
    name: 'Targa Resources',
    short_name: 'TRGP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4062',
    name: 'US Silica',
    short_name: 'SLCA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4063',
    name: 'Whiting Petroleum',
    short_name: 'WLL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4064',
    name: 'Oceaneering International',
    short_name: 'OII',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4065',
    name: 'World Fuel Services',
    short_name: 'INT',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4066',
    name: 'WPX Energy',
    short_name: 'WPX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4067',
    name: 'SM Energy',
    short_name: 'SM',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4068',
    name: 'OGE Energy',
    short_name: 'OGE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4069',
    name: 'Oasis',
    short_name: 'OAS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4070',
    name: 'Gulfport',
    short_name: 'GPORQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '4071',
    name: 'PBF Energy',
    short_name: 'PBF',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4072',
    name: 'Antero Resources Corp',
    short_name: 'AR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4073',
    name: 'Parsley Energy',
    short_name: 'PE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4122',
    name: 'Altaba',
    short_name: 'AABA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4123',
    name: 'Electronics for Imaging',
    short_name: 'EFII_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4124',
    name: 'Finisar',
    short_name: 'FNSR_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4125',
    name: 'PTC',
    short_name: 'PTC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4126',
    name: 'EchoStar',
    short_name: 'SATS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4127',
    name: 'Silicon Labs',
    short_name: 'SLAB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4128',
    name: 'Semtech',
    short_name: 'SMTC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4129',
    name: 'SS&Cs',
    short_name: 'SSNC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4130',
    name: 'Synaptics',
    short_name: 'SYNA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4131',
    name: 'Tech Data',
    short_name: 'TECD_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4132',
    name: 'ViaSat',
    short_name: 'VSAT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4133',
    name: 'Zillow C',
    short_name: 'Z',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4134',
    name: 'Tyler Technologies',
    short_name: 'TYL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4135',
    name: 'Guidewire',
    short_name: 'GWRE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4136',
    name: 'Worldpay',
    short_name: 'WP_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4137',
    name: 'Proofpoint',
    short_name: 'PFPT',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4138',
    name: 'Splunk',
    short_name: 'SPLK',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4139',
    name: 'EPAM Systems',
    short_name: 'EPAM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4140',
    name: 'Verint',
    short_name: 'VRNT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4141',
    name: 'Amdocs',
    short_name: 'DOX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4142',
    name: 'Aspen',
    short_name: 'AZPN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4143',
    name: 'CommVault',
    short_name: 'CVLT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4144',
    name: 'ServiceNow Inc',
    short_name: 'NOW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4145',
    name: 'Tableau Software',
    short_name: 'DATA_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4146',
    name: 'Palo Alto Networks',
    short_name: 'PANW',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4147',
    name: 'CDW Corp',
    short_name: 'CDW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4148',
    name: 'Mandiant',
    short_name: 'FEYE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4149',
    name: 'Veeva Systems A',
    short_name: 'VEEV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4150',
    name: 'Science Applications',
    short_name: 'SAIC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4151',
    name: 'Commscope Hlding',
    short_name: 'COMM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4152',
    name: 'GrubHub',
    short_name: 'GRUB',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4153',
    name: 'CDK Global Holdings LLC',
    short_name: 'CDK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4154',
    name: 'Zayo Group Holdings Inc',
    short_name: 'ZAYO_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4155',
    name: 'Lumentum Holdings Inc',
    short_name: 'LITE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4156',
    name: 'Zillow Group Inc',
    short_name: 'ZG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4157',
    name: 'Versum Materials',
    short_name: 'VSM_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4252',
    name: 'UGI',
    short_name: 'UGI',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4253',
    name: 'Portland General Electric',
    short_name: 'POR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4254',
    name: 'One Gas Inc',
    short_name: 'OGS',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4298',
    name: 'Preferred Bank',
    short_name: 'PFBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4299',
    name: 'Premier Financial',
    short_name: 'PFBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4300',
    name: 'Peapack-Gladstone',
    short_name: 'PGC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4301',
    name: 'Parke',
    short_name: 'PKBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4302',
    name: 'Plumas',
    short_name: 'PLBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4303',
    name: 'Pacific Mercantile',
    short_name: 'PMBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4304',
    name: 'Patriot National Bancorp',
    short_name: 'PNBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4305',
    name: 'Pinnacle',
    short_name: 'PNFP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4306',
    name: 'Pacific Premier',
    short_name: 'PPBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4307',
    name: 'Provident',
    short_name: 'PROV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4308',
    name: 'PB Bancorp',
    short_name: 'PBBI_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4309',
    name: 'Penns Woods',
    short_name: 'PWOD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4310',
    name: 'QCR',
    short_name: 'QCRH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4311',
    name: 'Republic Bancorp',
    short_name: 'RBCAA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4312',
    name: 'SB Financial',
    short_name: 'SBFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4313',
    name: 'Renasant',
    short_name: 'RNST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4314',
    name: 'Riverview',
    short_name: 'RVSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4315',
    name: 'Sandy Spring',
    short_name: 'SASR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4316',
    name: 'SB One',
    short_name: 'SBBX_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4317',
    name: 'Seacoast Banking Florida',
    short_name: 'SBCF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4318',
    name: 'Southside',
    short_name: 'SBSI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4319',
    name: 'South State',
    short_name: 'SSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4320',
    name: 'Simmons First National',
    short_name: 'SFNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4321',
    name: 'Southern First Bancshares',
    short_name: 'SFST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4322',
    name: 'Shore Bancshares',
    short_name: 'SHBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4323',
    name: 'Southern Missouri',
    short_name: 'SMBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4324',
    name: 'Summit Financial',
    short_name: 'SMMF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4325',
    name: 'Primis Financial',
    short_name: 'FRST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4326',
    name: '1st Source',
    short_name: 'SRCE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4327',
    name: 'Summit State Bank',
    short_name: 'SSBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4328',
    name: 'Stewardship',
    short_name: 'SSFN_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4329',
    name: 'S&T Bancorp',
    short_name: 'STBA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4330',
    name: 'Severn',
    short_name: 'SVBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4331',
    name: 'Stock Yards Bancorp',
    short_name: 'SYBT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4332',
    name: 'The Bancorp',
    short_name: 'TBBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4333',
    name: 'Territorial',
    short_name: 'TBNK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4334',
    name: 'TriCo',
    short_name: 'TCBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4335',
    name: 'TFS Financial',
    short_name: 'TFSL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4336',
    name: 'First Financial Indiana',
    short_name: 'THFF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4337',
    name: 'Towne Bank',
    short_name: 'TOWN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4338',
    name: 'TrustCo Bank NY',
    short_name: 'TRST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4339',
    name: 'Timberland',
    short_name: 'TSBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4340',
    name: 'United Bancorp',
    short_name: 'UBCP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4341',
    name: 'United Security',
    short_name: 'UBFO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4342',
    name: 'United Financial Bancorp',
    short_name: 'UBNK_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4343',
    name: 'United Bancshares',
    short_name: 'UBOH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4344',
    name: 'Atlantic Union',
    short_name: 'AUB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4345',
    name: 'United Community Banks',
    short_name: 'UCBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4346',
    name: 'United Community Financial',
    short_name: 'UCFC_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4347',
    name: 'Union',
    short_name: 'UNB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4348',
    name: 'Unity',
    short_name: 'UNTY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4349',
    name: 'First US Bancshares',
    short_name: 'FUSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4350',
    name: 'Univest',
    short_name: 'UVSP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4351',
    name: 'Village Bank&Trust',
    short_name: 'VBFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4352',
    name: 'Legacy Texas Financial Grp',
    short_name: 'LTXB_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4353',
    name: 'Westamerica Bancorporation',
    short_name: 'WABC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4354',
    name: 'Washington Trust',
    short_name: 'WASH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4355',
    name: 'Western New England',
    short_name: 'WNEB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4356',
    name: 'WesBanco',
    short_name: 'WSBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4357',
    name: 'Waterstone',
    short_name: 'WSBF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4358',
    name: 'WSFS',
    short_name: 'WSFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4359',
    name: 'West Bancorporation',
    short_name: 'WTBA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4360',
    name: 'WVS Financial',
    short_name: 'WVFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4361',
    name: 'Peoples Bancorp',
    short_name: 'PEBO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4362',
    name: 'Old National Bancorp',
    short_name: 'ONB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4363',
    name: 'Salisbury',
    short_name: 'SAL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4364',
    name: 'Bank of the James',
    short_name: 'BOTJ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4365',
    name: 'FS Bancorp',
    short_name: 'FSBW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4366',
    name: 'Howard',
    short_name: 'HBMD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4367',
    name: 'HomeStreet',
    short_name: 'HMST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4368',
    name: 'HomeTrust',
    short_name: 'HTBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4369',
    name: 'Wellesley',
    short_name: 'WEBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4370',
    name: 'Grupo Financiero Galicia ADR',
    short_name: 'GGAL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4371',
    name: 'Chemung',
    short_name: 'CHMG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4372',
    name: 'ConnectOne',
    short_name: 'CNOB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4373',
    name: 'First Internet',
    short_name: 'INBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4374',
    name: 'Sound Financial',
    short_name: 'SFBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4375',
    name: 'Community Bankers',
    short_name: 'ESXB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4376',
    name: 'Independent Bank Group',
    short_name: 'IBTX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4377',
    name: 'TriState',
    short_name: 'TSC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4378',
    name: 'Community Financial Corp',
    short_name: 'TCFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4379',
    name: 'First Bank',
    short_name: 'FRBA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4380',
    name: 'Standard AVB',
    short_name: 'STND',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4381',
    name: 'FNCB Bancorp',
    short_name: 'FNCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4382',
    name: 'Cortland Bancorp',
    short_name: 'CLDB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4383',
    name: 'Carter Bank',
    short_name: 'CARE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4384',
    name: 'Bankwell',
    short_name: 'BWFG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4385',
    name: 'ServisFirst Bancshares',
    short_name: 'SFBS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '4386',
    name: 'Peoples Fin',
    short_name: 'PFIS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4387',
    name: 'Opus Bank',
    short_name: 'OPB_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4388',
    name: 'First Mid Illinois Bancshares',
    short_name: 'FMBH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4389',
    name: 'Carolina Financial',
    short_name: 'CARO_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4390',
    name: 'Middlefield Banc',
    short_name: 'MBCN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4391',
    name: 'Entegra Financial',
    short_name: 'ENFC_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4392',
    name: 'Veritex Holdings Inc',
    short_name: 'VBTX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4393',
    name: 'CB Financial Services Inc',
    short_name: 'CBFV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4394',
    name: 'First Foundation Inc',
    short_name: 'FFWM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4395',
    name: 'Landmark Infrastructure Part',
    short_name: 'LMRK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4396',
    name: 'Triumph Bancorp',
    short_name: 'TBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4397',
    name: 'County Bancorp',
    short_name: 'ICBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4398',
    name: 'First Northwest Bancorp',
    short_name: 'FNWB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4399',
    name: 'Altabancorp',
    short_name: 'ALTA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4400',
    name: 'Reliant Bancorp',
    short_name: 'RBNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4401',
    name: 'Live Oak Bancshares Inc',
    short_name: 'LOB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4402',
    name: 'Provident Bancorp Inc',
    short_name: 'PVBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4403',
    name: 'Allegiance Bancshares Inc',
    short_name: 'ABTX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4404',
    name: 'Atlantic Capital Bancshares Inc',
    short_name: 'ACBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4405',
    name: 'First Guaranty Bancshares Inc',
    short_name: 'FGBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4406',
    name: 'Bancorp 34',
    short_name: 'BCTF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '4407',
    name: 'Cambridge Bancorp',
    short_name: 'CATC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4408',
    name: 'Farmers & Merchants Bancorp',
    short_name: 'FMAO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4409',
    name: 'FSB Community Bankshares',
    short_name: 'FSBC_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4410',
    name: 'FVCBankcorp',
    short_name: 'FVCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4411',
    name: 'Nicolet Bankshares Inc',
    short_name: 'NCBS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4412',
    name: 'Ottawa Savings Bancorp Inc',
    short_name: 'OTTW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '4413',
    name: 'Equity Bancshares Inc',
    short_name: 'EQBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4414',
    name: 'SmartFinancial Inc',
    short_name: 'SMBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4415',
    name: 'Midland States Banc',
    short_name: 'MSBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4416',
    name: 'HarborOne Banc',
    short_name: 'HONE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4417',
    name: 'Randolph Bancorp',
    short_name: 'RNDB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4418',
    name: 'First Hawaiian',
    short_name: 'FHB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4419',
    name: 'Capstar Financial',
    short_name: 'CSTR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4420',
    name: 'HV Bancorp',
    short_name: 'HVBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4421',
    name: 'PCSB Financial',
    short_name: 'PCSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4422',
    name: 'Affinity Bancshares',
    short_name: 'AFBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4423',
    name: 'Guaranty Bancshares',
    short_name: 'GNTY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4424',
    name: 'Esquire Financial',
    short_name: 'ESQ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4425',
    name: 'RBB Bancorp',
    short_name: 'RBB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4426',
    name: 'Bank Of Princeton',
    short_name: 'BPRN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4427',
    name: 'Eagle Financial',
    short_name: 'EFBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '4428',
    name: 'Ponce Financial',
    short_name: 'PDLB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4429',
    name: 'Fidelity D&D',
    short_name: 'FDBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4430',
    name: 'Ffbw',
    short_name: 'FFBW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4431',
    name: 'Merchants Bancorp',
    short_name: 'MBIN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4432',
    name: 'CBTX',
    short_name: 'CBTX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4433',
    name: 'Sterling Bancorp',
    short_name: 'SBT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4434',
    name: 'Luther Burbank',
    short_name: 'LBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4435',
    name: 'MVB Financial',
    short_name: 'MVBF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4436',
    name: 'First Choice Bancorp',
    short_name: 'FCBP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4437',
    name: 'Bridgewater Bancshares',
    short_name: 'BWB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4438',
    name: 'OP Bancorp',
    short_name: 'OPBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4439',
    name: 'Spirit Texas',
    short_name: 'STXB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4440',
    name: 'Business First',
    short_name: 'BFST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4441',
    name: 'Origin Bancorp',
    short_name: 'OBNK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4442',
    name: 'BayCom',
    short_name: 'BCML',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4443',
    name: 'Level One Bancorp',
    short_name: 'LEVL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4444',
    name: 'Columbia Financial',
    short_name: 'CLBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4445',
    name: 'Coastal Financial',
    short_name: 'CCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4446',
    name: 'First Western Financial',
    short_name: 'MYFW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4447',
    name: 'Mid-Southern Bancorp',
    short_name: 'MSVB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4448',
    name: 'Amalgamated Bank',
    short_name: 'AMAL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4449',
    name: 'PCB Bancorp',
    short_name: 'PCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4450',
    name: 'Riverview Financial',
    short_name: 'RIVE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4451',
    name: 'Amerant Bancorp A',
    short_name: 'AMTB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4452',
    name: 'Amerant Bancorp',
    short_name: 'AMTBB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4453',
    name: 'Bank7',
    short_name: 'BSVN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4454',
    name: 'Capital Bancorp',
    short_name: 'CBNK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4455',
    name: 'CBM Bancorp',
    short_name: 'CBMB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4456',
    name: 'Bank First National',
    short_name: 'BFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4457',
    name: '1895 of Wisconsin',
    short_name: 'BCOW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4458',
    name: 'Rhinebeck',
    short_name: 'RBKB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4459',
    name: 'First National',
    short_name: 'FXNC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4460',
    name: 'Red River Bancshares',
    short_name: 'RRBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4461',
    name: 'Mainstreet Bank',
    short_name: 'MNSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4462',
    name: 'MetroCity',
    short_name: 'MCBS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4463',
    name: 'Hbt Fin',
    short_name: 'HBT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4631',
    name: 'Progenics',
    short_name: 'PGNX_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4632',
    name: 'Eyepoint Pharma',
    short_name: 'EYPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4633',
    name: 'Rigel',
    short_name: 'RIGL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4634',
    name: 'Sangamo Therapeutics',
    short_name: 'SGMO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4635',
    name: 'SIGA Tech',
    short_name: 'SIGA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4636',
    name: 'Spectrum',
    short_name: 'SPPI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4637',
    name: 'Innoviva',
    short_name: 'INVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4638',
    name: 'Paratek Pharma',
    short_name: 'PRTK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4639',
    name: 'Vanda',
    short_name: 'VNDA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4640',
    name: 'Zogenix',
    short_name: 'ZGNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4641',
    name: 'Savara',
    short_name: 'SVRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4642',
    name: 'Inovio',
    short_name: 'INO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4643',
    name: 'ChemoCentryx',
    short_name: 'CCXI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4644',
    name: 'Supernus',
    short_name: 'SUPN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4645',
    name: 'Verastem',
    short_name: 'VSTM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4646',
    name: 'Arbutus Biopharma',
    short_name: 'ABUS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4647',
    name: 'ANI Pharma',
    short_name: 'ANIP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4648',
    name: 'Amarin',
    short_name: 'AMRN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4649',
    name: 'Exelixis',
    short_name: 'EXEL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4650',
    name: 'Prothena',
    short_name: 'PRTA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4651',
    name: 'Enanta',
    short_name: 'ENTA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4652',
    name: 'Epizyme Inc',
    short_name: 'EPZM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4653',
    name: 'GW Pharma ADR',
    short_name: 'GWPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4654',
    name: 'Puma Biotech',
    short_name: 'PBYI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4655',
    name: 'Acceleron P',
    short_name: 'XLRN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4656',
    name: 'Esperion Th',
    short_name: 'ESPR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4657',
    name: 'Fate Therapeutics',
    short_name: 'FATE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4658',
    name: 'Five Prime Therapeutics',
    short_name: 'FPRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4659',
    name: 'Mirati Ther',
    short_name: 'MRTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4660',
    name: 'NanoString Technologies',
    short_name: 'NSTG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4661',
    name: 'PTC Therapeutics',
    short_name: 'PTCT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4662',
    name: 'MacroGenics Inc',
    short_name: 'MGNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4663',
    name: 'Karyopharm',
    short_name: 'KPTI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4664',
    name: 'Aerie Pharmace',
    short_name: 'AERI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4665',
    name: 'Veracyte Inc',
    short_name: 'VCYT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4666',
    name: 'Xencor Inc',
    short_name: 'XNCR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4667',
    name: 'Eloxx Pharma',
    short_name: 'ELOX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4668',
    name: 'Iovance Biotherapeutics',
    short_name: 'IOVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4669',
    name: 'Eiger Biopharma',
    short_name: 'EIGR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4670',
    name: 'Concert Pharm',
    short_name: 'CNCE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4671',
    name: 'Eagle Pharm',
    short_name: 'EGRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4672',
    name: 'Uniqure NV',
    short_name: 'QURE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4673',
    name: 'GlycoMimetics',
    short_name: 'GLYC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4674',
    name: 'Intracellular Th',
    short_name: 'ITCI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4675',
    name: 'Flexion Theraptc',
    short_name: 'FLXN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4676',
    name: 'Cara Therapeutic',
    short_name: 'CARA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4677',
    name: 'Akebia Ther',
    short_name: 'AKBA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4678',
    name: 'Travere Therapeutics',
    short_name: 'TVTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4679',
    name: 'Dicerna Pharm',
    short_name: 'DRNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4680',
    name: 'Revance The',
    short_name: 'RVNC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4681',
    name: 'Adamas Pharmaceuticals Inc',
    short_name: 'ADMS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4682',
    name: 'Alder Bioph',
    short_name: 'ALDR_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4683',
    name: 'Cymabay Therapeu',
    short_name: 'CBAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4684',
    name: 'Amphastar P',
    short_name: 'AMPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4685',
    name: 'Theravance Biopharma',
    short_name: 'TBPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4686',
    name: 'Larimar Therapeutics Inc',
    short_name: 'LRMR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4687',
    name: 'Minerva Neurosciences',
    short_name: 'NERV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4688',
    name: 'Ocular Therapeutix Inc',
    short_name: 'OCUL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4689',
    name: 'Adverum Biotechn',
    short_name: 'ADVM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4690',
    name: 'Sage Therapeutic',
    short_name: 'SAGE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4691',
    name: 'Aurinia Pharma',
    short_name: 'AUPH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4692',
    name: 'Foamix Pharma',
    short_name: 'FOMX_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4693',
    name: 'ProQR Therapeutics NV',
    short_name: 'PRQR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4694',
    name: 'Atara Biotherapeutics Inc',
    short_name: 'ATRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4695',
    name: 'PRA Health Sciences Inc',
    short_name: 'PRAH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4696',
    name: 'FibroGen Inc',
    short_name: 'FGEN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4697',
    name: 'INC Research',
    short_name: 'SYNH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4698',
    name: 'DBV Technologies',
    short_name: 'DBVT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4699',
    name: 'Dermira',
    short_name: 'DERM_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4700',
    name: 'Xenon Pharmaceuticals',
    short_name: 'XENE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4701',
    name: 'Spark Therapeutics Inc',
    short_name: 'ONCE_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4702',
    name: 'Ascendis Pharma AS',
    short_name: 'ASND',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4703',
    name: 'Rocket Pharma',
    short_name: 'RCKT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4704',
    name: 'TherapeuticsMD',
    short_name: 'TXMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4705',
    name: 'Chinook Therapeutics',
    short_name: 'KDNY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4706',
    name: 'Corbus Pharmaceuticals Holding',
    short_name: 'CRBP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4707',
    name: 'Blueprint Medicines Corp',
    short_name: 'BPMC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4708',
    name: 'Adaptimmune Therapeutics',
    short_name: 'ADAP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4709',
    name: 'Collegium Pharmaceutical',
    short_name: 'COLL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4710',
    name: 'Galapagos ADR',
    short_name: 'GLPG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4711',
    name: 'Sio Gene Therapies',
    short_name: 'SIOX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4712',
    name: 'Cellectis',
    short_name: 'CLLS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4713',
    name: 'Seres Therapeutics Inc',
    short_name: 'MCRB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4714',
    name: 'Aimmune Therapeutics Inc',
    short_name: 'AIMT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4715',
    name: 'Global Blood Therapeutics Inc',
    short_name: 'GBT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4716',
    name: 'Synlogic',
    short_name: 'SYBX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4717',
    name: 'Novocure Ltd',
    short_name: 'NVCR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4718',
    name: 'Regenxbio Inc',
    short_name: 'RGNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4719',
    name: 'Aclaris Therapeutics Inc',
    short_name: 'ACRS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4720',
    name: 'CytomX Therapeutics Inc',
    short_name: 'CTMX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4721',
    name: 'Kura Oncology Inc',
    short_name: 'KURA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4722',
    name: 'MyoKardia Inc',
    short_name: 'MYOK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4723',
    name: 'Strongbridge Biopharma plc',
    short_name: 'SBBP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4724',
    name: 'Voyager Therapeutics Inc',
    short_name: 'VYGR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4725',
    name: 'Wave Life Sciences Ltd',
    short_name: 'WVE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4726',
    name: 'Proteostasis Therapeutics',
    short_name: 'YMTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4727',
    name: 'BeiGene ADS',
    short_name: 'BGNE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4728',
    name: 'Editas Medicine',
    short_name: 'EDIT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4729',
    name: 'HUTCHMED DRC',
    short_name: 'HCM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4730',
    name: 'Aeglea Bio Therapeutics',
    short_name: 'AGLE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4731',
    name: 'Reata Pharma',
    short_name: 'RETA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4732',
    name: 'Intellia Therapeutics Inc',
    short_name: 'NTLA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4733',
    name: 'Syros Pharma',
    short_name: 'SYRS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4734',
    name: 'Audentes Therapeutics',
    short_name: 'BOLD_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4735',
    name: 'Medpace Holdings',
    short_name: 'MEDP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4736',
    name: 'AC Immune',
    short_name: 'ACIU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4737',
    name: 'Crispr Therapeutics',
    short_name: 'CRSP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4738',
    name: 'Ra Pharma',
    short_name: 'RARX_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4739',
    name: 'AnaptysBio',
    short_name: 'ANAB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4740',
    name: 'Forte Biosciences Inc',
    short_name: 'FBRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4741',
    name: 'UroGen Pharma',
    short_name: 'URGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4742',
    name: 'argenx ADR',
    short_name: 'ARGX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4743',
    name: 'G1 Therapeutics',
    short_name: 'GTHX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4744',
    name: 'Athenex',
    short_name: 'ATNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4745',
    name: 'Akcea Therapeutics',
    short_name: 'AKCA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4746',
    name: 'Dova Pharma',
    short_name: 'DOVA_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4747',
    name: 'Kala Pharma',
    short_name: 'KALA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4748',
    name: 'PetIQ',
    short_name: 'PETQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4749',
    name: 'Zai Lab',
    short_name: 'ZLAB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4750',
    name: 'Deciphera Pharma',
    short_name: 'DCPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4751',
    name: 'Rhythm Pharma',
    short_name: 'RYTM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4752',
    name: 'OptiNose',
    short_name: 'OPTN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4753',
    name: 'Apellis Pharma',
    short_name: 'APLS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4754',
    name: 'Quanterix',
    short_name: 'QTRX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4755',
    name: 'Denali Therapeutics',
    short_name: 'DNLI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4756',
    name: 'Adicet Bio',
    short_name: 'ACET',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4757',
    name: 'Solid Biosciences',
    short_name: 'SLDB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4758',
    name: 'Evolus',
    short_name: 'EOLS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4759',
    name: 'Homology Medicines',
    short_name: 'FIXX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4760',
    name: 'Cogent Biosciences',
    short_name: 'COGT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4761',
    name: 'Unity Biotech',
    short_name: 'UBX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4762',
    name: 'Surface Oncology',
    short_name: 'SURF',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4763',
    name: 'Kiniksa Pharma',
    short_name: 'KNSA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4764',
    name: 'Aptinyx',
    short_name: 'APTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4765',
    name: 'Magenta Therapeutics',
    short_name: 'MGTA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4766',
    name: 'Xeris Pharmaceuticals',
    short_name: 'XERS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4767',
    name: 'AVROBIO',
    short_name: 'AVRO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4768',
    name: 'Forty Seven',
    short_name: 'FTSV_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4769',
    name: 'Tricida',
    short_name: 'TCDA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4770',
    name: 'Neuronetics',
    short_name: 'STIM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4771',
    name: 'Translate Bio',
    short_name: 'TBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4772',
    name: 'Autolus Therapeutics',
    short_name: 'AUTL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4773',
    name: 'Eidos Therapeutics',
    short_name: 'EIDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4774',
    name: 'Allakos',
    short_name: 'ALLK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4775',
    name: 'Rubius Therapeutics',
    short_name: 'RUBY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4776',
    name: 'Replimune',
    short_name: 'REPL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4777',
    name: 'Aquestive Therapeutics',
    short_name: 'AQST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4778',
    name: 'Crinetics Pharma',
    short_name: 'CRNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4849',
    name: 'Perion Network',
    short_name: 'PERI',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4850',
    name: 'Photronics',
    short_name: 'PLAB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4851',
    name: 'ePlus',
    short_name: 'PLUS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4852',
    name: 'Power Integrations',
    short_name: 'POWI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4853',
    name: 'Perficient',
    short_name: 'PRFT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4854',
    name: 'Progress',
    short_name: 'PRGS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4855',
    name: 'Pixelworks',
    short_name: 'PXLW',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4856',
    name: 'QAD A',
    short_name: 'QADA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4857',
    name: 'QAD B',
    short_name: 'QADB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4858',
    name: 'Qualstar',
    short_name: 'QBAK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '4859',
    name: 'RCM Technologies',
    short_name: 'RCMT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4860',
    name: 'Qumu Corp',
    short_name: 'QUMU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4861',
    name: 'RigNet',
    short_name: 'RNET',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4862',
    name: 'Creative Realities',
    short_name: 'CREX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4863',
    name: 'RealPage',
    short_name: 'RP',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4864',
    name: 'ScanSource',
    short_name: 'SCSC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4865',
    name: 'TROOPS',
    short_name: 'SGOC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4866',
    name: 'Silicom',
    short_name: 'SILC',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4867',
    name: 'Silicon Motion',
    short_name: 'SIMO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4868',
    name: 'Simulations Plus',
    short_name: 'SLP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4869',
    name: 'Smith Micro Software',
    short_name: 'SMSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4870',
    name: 'Synchronoss',
    short_name: 'SNCR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4871',
    name: 'Sapiens',
    short_name: 'SPNS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4872',
    name: 'Greenidge Generation Holdings',
    short_name: 'GREE',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4873',
    name: 'SPS Commerce',
    short_name: 'SPSC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4874',
    name: 'Stratasys Ltd',
    short_name: 'SSYS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4875',
    name: 'Streamline',
    short_name: 'STRM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4876',
    name: 'TransAct',
    short_name: 'TACT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4877',
    name: 'TiVo',
    short_name: 'TIVO_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4878',
    name: 'TeleNav',
    short_name: 'TNAV',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4879',
    name: 'Tower',
    short_name: 'TSEM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4880',
    name: 'Xperi',
    short_name: 'XPER',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4881',
    name: 'Ultra Cleans',
    short_name: 'UCTT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4882',
    name: 'Onespan',
    short_name: 'OSPN',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4883',
    name: 'VNET DRC',
    short_name: 'VNET',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4884',
    name: 'Virtusa',
    short_name: 'VRTU',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4885',
    name: 'Boingo',
    short_name: 'WIFI',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4886',
    name: 'Wayside',
    short_name: 'WSTG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4887',
    name: 'Zix',
    short_name: 'ZIXI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4888',
    name: 'Logitech',
    short_name: 'LOGI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4889',
    name: 'Meet Group',
    short_name: 'MEET',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4890',
    name: 'Blucora',
    short_name: 'BCOR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4891',
    name: 'GSE Systems',
    short_name: 'GVP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4892',
    name: 'Park City Group',
    short_name: 'PCYG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4893',
    name: 'Tucows Inc.',
    short_name: 'TCX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4894',
    name: 'XpresSpa',
    short_name: 'XSPA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4895',
    name: 'CounterPath',
    short_name: 'CPAH',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4896',
    name: 'Neonode',
    short_name: 'NEON',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4897',
    name: 'Ideanomics',
    short_name: 'IDEX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4898',
    name: 'Mellanox',
    short_name: 'MLNX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4899',
    name: 'Brightcove',
    short_name: 'BCOV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4900',
    name: 'Nextgen Healthcare',
    short_name: 'NXGN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4901',
    name: 'Synacor',
    short_name: 'SYNC',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4902',
    name: 'Qualys',
    short_name: 'QLYS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4903',
    name: 'MAM',
    short_name: 'MAMS_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4904',
    name: 'Fronteo',
    short_name: 'FTEO_old',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4905',
    name: 'Marin Software',
    short_name: 'MRIN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4906',
    name: 'Benefitfocus',
    short_name: 'BNFT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4907',
    name: 'Gogo Inc',
    short_name: 'GOGO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4908',
    name: 'Premier Inc',
    short_name: 'PINC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4909',
    name: 'Wix.Com Ltd',
    short_name: 'WIX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4910',
    name: 'Criteo Sa',
    short_name: 'CRTO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4911',
    name: 'Endurance Intl',
    short_name: 'EIGI',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4912',
    name: 'SilverSun Tech',
    short_name: 'SSNT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4913',
    name: 'DarioHealth',
    short_name: 'DRIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4914',
    name: 'VirTra',
    short_name: 'VTSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4915',
    name: 'AudioEye',
    short_name: 'AEYE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4916',
    name: 'Neurotrope',
    short_name: 'NTRP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4917',
    name: 'SharpSpring',
    short_name: 'SHSP',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4918',
    name: 'Five9',
    short_name: 'FIVN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4919',
    name: '2U Inc',
    short_name: 'TWOU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4920',
    name: 'Varonis Systems',
    short_name: 'VRNS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4921',
    name: 'Weibo Corp',
    short_name: 'WB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4922',
    name: 'Inpixon',
    short_name: 'INPX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4923',
    name: 'Finjan Hold',
    short_name: 'FNJN_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4924',
    name: 'MobileIron',
    short_name: 'MOBL',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4925',
    name: 'Materialise NV',
    short_name: 'MTLS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4926',
    name: 'Sphere 3D',
    short_name: 'ANY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4927',
    name: 'Cyberark Software',
    short_name: 'CYBR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4928',
    name: 'LogicMark',
    short_name: 'NXTD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4929',
    name: 'Upland Software Inc',
    short_name: 'UPLD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4930',
    name: 'Hello Group',
    short_name: 'MOMO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4931',
    name: 'Baozun Inc',
    short_name: 'BZUN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4932',
    name: 'Majesco',
    short_name: 'MJCO',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4933',
    name: 'Alarm.com Holdings',
    short_name: 'ALRM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4934',
    name: 'Appfolio Inc',
    short_name: 'APPF',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4935',
    name: 'Rapid7 Inc',
    short_name: 'RPD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4936',
    name: 'SITO Mobile Ltd',
    short_name: 'SITOQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '4937',
    name: 'Adesto Technologies Corp',
    short_name: 'IOTS_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4938',
    name: 'Borqs Tech',
    short_name: 'BRQS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4939',
    name: 'Match Group',
    short_name: 'MTCH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4940',
    name: 'Mimecast Ltd',
    short_name: 'MIME',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4941',
    name: 'Atlassian Corp Plc',
    short_name: 'TEAM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4942',
    name: 'Secureworks',
    short_name: 'SCWX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4943',
    name: 'My Size',
    short_name: 'MYSZ',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4944',
    name: 'Impinj',
    short_name: 'PI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4945',
    name: 'Atomera',
    short_name: 'ATOM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4946',
    name: 'Talend',
    short_name: 'TLND',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4947',
    name: 'Everbridge',
    short_name: 'EVBG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4948',
    name: 'Gridsum',
    short_name: 'GSUM',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4949',
    name: 'Nutanix',
    short_name: 'NTNX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4950',
    name: 'Tabula Rasa HealthCare',
    short_name: 'TRHC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4951',
    name: 'Coupa Software',
    short_name: 'COUP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4952',
    name: 'Everspin Tech',
    short_name: 'MRAM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4953',
    name: 'Blackline',
    short_name: 'BL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4954',
    name: 'GDS Holdings',
    short_name: 'GDS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4955',
    name: 'GTY Tech A',
    short_name: 'GTYH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4956',
    name: 'Ichor Holdings',
    short_name: 'ICHR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4957',
    name: 'Presidio',
    short_name: 'PSDO_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4958',
    name: 'Okta',
    short_name: 'OKTA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4959',
    name: 'Veritone',
    short_name: 'VERI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4960',
    name: 'Appian',
    short_name: 'APPN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4961',
    name: 'Smart Global',
    short_name: 'SGH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4962',
    name: 'Exela Tech',
    short_name: 'XELA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4963',
    name: 'Beyond Air',
    short_name: 'XAIR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4964',
    name: 'Rimini Street',
    short_name: 'RMNI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4965',
    name: 'MongoDB',
    short_name: 'MDB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4966',
    name: 'RumbleON',
    short_name: 'RMBL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4967',
    name: 'Forescout Tech',
    short_name: 'FSCT',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4968',
    name: 'Altair Engineering',
    short_name: 'ALTR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4969',
    name: 'Safe-T',
    short_name: 'SFET',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4970',
    name: 'Acm Research',
    short_name: 'ACMR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4971',
    name: 'Bandwidth',
    short_name: 'BAND',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4972',
    name: 'Enveric Biosciences',
    short_name: 'ENVB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4973',
    name: 'One Stop Systems',
    short_name: 'OSS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4974',
    name: 'Akerna',
    short_name: 'KERN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4975',
    name: 'Zscaler',
    short_name: 'ZS',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4976',
    name: 'Dropbox',
    short_name: 'DBX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4977',
    name: 'Red Violet',
    short_name: 'RDVT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4978',
    name: 'nLIGHT',
    short_name: 'LASR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4979',
    name: 'DocuSign',
    short_name: 'DOCU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4980',
    name: 'AGM A',
    short_name: 'AGMH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4981',
    name: 'CLPS',
    short_name: 'CLPS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4982',
    name: 'i3 Verticals',
    short_name: 'IIIV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4983',
    name: 'Domo',
    short_name: 'DOMO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4984',
    name: 'Tenable',
    short_name: 'TENB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4985',
    name: 'Opera',
    short_name: 'OPRA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4986',
    name: 'Aurora Mobile',
    short_name: 'JG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4987',
    name: 'Pintec Tech',
    short_name: 'PT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4988',
    name: 'Qutoutiao',
    short_name: 'QTT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4989',
    name: 'Momentive Global',
    short_name: 'MNTV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4990',
    name: 'Covetrus',
    short_name: 'CVET',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4991',
    name: 'Super League Gaming',
    short_name: 'SLGG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4992',
    name: 'Ruhnn',
    short_name: 'RUHN',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4993',
    name: 'Powerbridge',
    short_name: 'PBTS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4994',
    name: 'Sciplay',
    short_name: 'SCPL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4995',
    name: 'Yunji',
    short_name: 'YJ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4996',
    name: 'Aterian',
    short_name: 'ATER',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4997',
    name: 'Crowdstrike Holdings',
    short_name: 'CRWD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4998',
    name: 'DouYu',
    short_name: 'DOYU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '4999',
    name: 'Livongo',
    short_name: 'LVGO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5000',
    name: 'Health Catalyst',
    short_name: 'HCAT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5001',
    name: '10X Genomics',
    short_name: 'TXG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5002',
    name: 'Datadog',
    short_name: 'DDOG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5169',
    name: 'Retail Opportunity',
    short_name: 'ROIC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5170',
    name: 'Selective',
    short_name: 'SIGI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5171',
    name: 'Lendingtree',
    short_name: 'TREE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5172',
    name: 'Sabra',
    short_name: 'SBRA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5173',
    name: 'GCI Liberty A',
    short_name: 'GLIBA',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5175',
    name: 'Caretrust Inc',
    short_name: 'CTRE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5176',
    name: 'FirstService',
    short_name: 'FSV',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5178',
    name: 'Newmark Group',
    short_name: 'NMRK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5268',
    name: 'Perma-Fix Inc',
    short_name: 'PESI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5269',
    name: 'PetMed Express',
    short_name: 'PETS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5270',
    name: 'P&F Industries',
    short_name: 'PFIN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5271',
    name: 'PFSweb',
    short_name: 'PFSW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5272',
    name: 'Park Ohio Holdings',
    short_name: 'PKOH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5273',
    name: 'Children\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s Place',
    short_name: 'PLCE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5274',
    name: 'Plug Power',
    short_name: 'PLUG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5275',
    name: 'Plexus',
    short_name: 'PLXS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5276',
    name: 'PrimeEnergy',
    short_name: 'PNRG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5277',
    name: 'Pool',
    short_name: 'POOL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5278',
    name: 'Pope Resources A Delaware',
    short_name: 'POPE_old',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5279',
    name: 'Powell Industries',
    short_name: 'POWL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5280',
    name: 'Perceptron',
    short_name: 'PRCP',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5281',
    name: 'PRGX',
    short_name: 'PRGX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5282',
    name: 'Primoris',
    short_name: 'PRIM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5283',
    name: 'Primo Water',
    short_name: 'PRMW',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '5284',
    name: 'The Providence Service',
    short_name: 'MODV',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5285',
    name: 'CarpParts.Com',
    short_name: 'PRTS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5286',
    name: 'PriceSmart',
    short_name: 'PSMT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5287',
    name: "Papa John's",
    short_name: 'PZZA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5288',
    name: 'Rave Restaurant',
    short_name: 'RAVE',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5289',
    name: 'QuinStreet',
    short_name: 'QNST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5290',
    name: 'Rada Electronic Industries',
    short_name: 'RADA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5291',
    name: 'Freightcar',
    short_name: 'RAIL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5292',
    name: 'Raven',
    short_name: 'RAVN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5293',
    name: 'Rubicon Tech',
    short_name: 'RBCN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5294',
    name: 'Rent-A-Center',
    short_name: 'RCII',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5295',
    name: 'Rocky Brands',
    short_name: 'RCKY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5296',
    name: 'Recon Technology',
    short_name: 'RCON',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5297',
    name: 'Radcom',
    short_name: 'RDCM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5298',
    name: 'Reading Int',
    short_name: 'RDI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5299',
    name: 'Reading Int B',
    short_name: 'RDIB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5300',
    name: 'Resources Connection',
    short_name: 'RGP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5301',
    name: 'Research Frontiers',
    short_name: 'REFR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5302',
    name: 'Richardson Electronics',
    short_name: 'RELL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5303',
    name: 'Reliv',
    short_name: 'RELV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5304',
    name: 'RF Industries',
    short_name: 'RFIL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5305',
    name: 'RGC Resources',
    short_name: 'RGCO',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5306',
    name: 'RCI Hospitality',
    short_name: 'RICK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5307',
    name: 'Rocky Mountain Chocolate',
    short_name: 'RMCF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5308',
    name: 'RealNetworks',
    short_name: 'RNWK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5309',
    name: 'Gibraltar Industries',
    short_name: 'ROCK',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5310',
    name: 'Urban One Inc',
    short_name: 'UONE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5311',
    name: 'Urban One D',
    short_name: 'UONEK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5312',
    name: 'RBC Bearings',
    short_name: 'ROLL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5313',
    name: 'Red Robin Gourmet Burgers',
    short_name: 'RRGB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5314',
    name: 'Rush A',
    short_name: 'RUSHA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5315',
    name: 'Rush B',
    short_name: 'RUSHB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5316',
    name: "Ruth's Hospitality",
    short_name: 'RUTH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5317',
    name: 'Sanderson Farms',
    short_name: 'SAFM',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5318',
    name: 'Salem Media',
    short_name: 'SALM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5319',
    name: 'Sanmina',
    short_name: 'SANM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5320',
    name: 'S&W Seed',
    short_name: 'SANW',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5321',
    name: 'Sinclair',
    short_name: 'SBGI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5322',
    name: 'Scholastic',
    short_name: 'SCHL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5323',
    name: 'Schnitzer',
    short_name: 'SCHN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5324',
    name: 'Comscore',
    short_name: 'SCOR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5325',
    name: 'Shoe Carnival',
    short_name: 'SCVL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5326',
    name: 'Origin Agritech',
    short_name: 'SEED',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5327',
    name: 'Seneca Foods A',
    short_name: 'SENEA',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5328',
    name: 'Seneca Foods B',
    short_name: 'SENEB',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5329',
    name: 'Superior Uniform',
    short_name: 'SGC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5330',
    name: 'SigmaTron',
    short_name: 'SGMA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5331',
    name: 'Light Wonder',
    short_name: 'SGMS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5332',
    name: 'SPAR Group',
    short_name: 'SGRP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5333',
    name: 'Shiloh',
    short_name: 'SHLOQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5334',
    name: 'Steven Madden',
    short_name: 'SHOO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5335',
    name: 'Silgans',
    short_name: 'SLGN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5336',
    name: 'Sharps',
    short_name: 'SMED',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5337',
    name: 'Schmitt',
    short_name: 'SMIT',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5338',
    name: 'Stein Mart',
    short_name: 'SMRTQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5339',
    name: 'SMTC',
    short_name: 'SMTX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5340',
    name: 'Helios Tech',
    short_name: 'HLIO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5341',
    name: 'SORL',
    short_name: 'SORL_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5342',
    name: 'Aikido Pharma Inc',
    short_name: 'AIKI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5343',
    name: 'SpartanNash Co',
    short_name: 'SPTN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5344',
    name: 'Future Fintech',
    short_name: 'FTFT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5345',
    name: 'ServiceSource',
    short_name: 'SREV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5346',
    name: 'SP Plus Corp',
    short_name: 'SP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5347',
    name: 'SunOpta Inc.',
    short_name: 'STKL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5348',
    name: 'Stampscom',
    short_name: 'STMP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5349',
    name: 'Strategic Education',
    short_name: 'STRA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5350',
    name: 'Sterling Construction',
    short_name: 'STRL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5351',
    name: 'Strattec',
    short_name: 'STRT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5352',
    name: 'Summer Infant',
    short_name: 'SUMR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5353',
    name: 'Smith & Wesson',
    short_name: 'SWBI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5354',
    name: 'Sykes',
    short_name: 'SYKE',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5355',
    name: 'Synthesis Energy',
    short_name: 'SYNE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5356',
    name: 'Synalloy',
    short_name: 'SYNL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5357',
    name: 'Sypris',
    short_name: 'SYPR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5358',
    name: 'Taitron',
    short_name: 'TAIT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5359',
    name: 'Carrols',
    short_name: 'TAST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5360',
    name: 'Tat Techno',
    short_name: 'TATT',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5361',
    name: 'Taylor Devices',
    short_name: 'TAYD',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5362',
    name: 'TransGlobe Energy',
    short_name: 'TGA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5363',
    name: 'Titan Machinery',
    short_name: 'TITN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5364',
    name: 'Tandy Leather',
    short_name: 'TLFA',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5365',
    name: 'Transcat',
    short_name: 'TRNS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5366',
    name: 'TriMas',
    short_name: 'TRS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5367',
    name: 'TSR',
    short_name: 'TSRI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5368',
    name: 'TTEC',
    short_name: 'TTEC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5369',
    name: 'Tetra Tech',
    short_name: 'TTEK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5370',
    name: 'TechTarget',
    short_name: 'TTGT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5371',
    name: 'TTM',
    short_name: 'TTMI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5372',
    name: 'Tuesday Morning',
    short_name: 'TUESQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5373',
    name: 'Twin Disc',
    short_name: 'TWIN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5374',
    name: 'Kaspien Holdings',
    short_name: 'KSPN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5375',
    name: 'Texas Roadhouse',
    short_name: 'TXRH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5376',
    name: 'Universal Electronics',
    short_name: 'UEIC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5377',
    name: 'Lesaka Tech',
    short_name: 'UEPS',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5378',
    name: 'Ufp Industries',
    short_name: 'UFPI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5379',
    name: 'UFP',
    short_name: 'UFPT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5380',
    name: 'United-Guardian',
    short_name: 'UG',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5381',
    name: 'Amerco',
    short_name: 'UHAL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5382',
    name: 'Ultralife',
    short_name: 'ULBI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5383',
    name: 'Westwater Resources',
    short_name: 'WWR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '5384',
    name: 'Universal Stainless&Alloy',
    short_name: 'USAP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5385',
    name: 'U S Concrete',
    short_name: 'USCR',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5386',
    name: 'US Energy',
    short_name: 'USEG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5387',
    name: 'United States Lime&Minerals',
    short_name: 'USLM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5388',
    name: 'Value Line',
    short_name: 'VALU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5389',
    name: 'Veeco',
    short_name: 'VECO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5390',
    name: 'Vicor',
    short_name: 'VICR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5391',
    name: 'Virco',
    short_name: 'VIRC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5392',
    name: 'Village Super Market',
    short_name: 'VLGEA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5393',
    name: 'Cimpress NV',
    short_name: 'CMPR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5394',
    name: 'Vera Bradley',
    short_name: 'VRA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5395',
    name: 'VSE Corporation',
    short_name: 'VSEC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5396',
    name: 'iMedia Brands',
    short_name: 'IMBI',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5397',
    name: 'WD-40',
    short_name: 'WDFC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5398',
    name: 'Weyco',
    short_name: 'WEYS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5399',
    name: 'G Willi-Food',
    short_name: 'WILC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5400',
    name: 'Winmark',
    short_name: 'WINA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5401',
    name: 'Encore Wire',
    short_name: 'WIRE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5402',
    name: 'Willdan',
    short_name: 'WLDN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5403',
    name: 'AYRO Inc',
    short_name: 'AYRO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5404',
    name: 'Willamette Valley Vineyards',
    short_name: 'WVVI',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5405',
    name: 'Woodward',
    short_name: 'WWD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5406',
    name: 'The York Water',
    short_name: 'YORW',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5407',
    name: 'ZAGG',
    short_name: 'ZAGG',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5408',
    name: 'Zebra',
    short_name: 'ZBRA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5409',
    name: 'Olympic Steel',
    short_name: 'ZEUS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5410',
    name: 'Zion Oil&Gas',
    short_name: 'ZNOG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5411',
    name: 'Zumiez',
    short_name: 'ZUMZ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5412',
    name: 'Zovio',
    short_name: 'ZVO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5413',
    name: 'Pilgrims Pride',
    short_name: 'PPC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5414',
    name: 'Ranger Oil',
    short_name: 'PVAC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5415',
    name: 'Avnet',
    short_name: 'AVT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5416',
    name: 'Saga Communications',
    short_name: 'SGA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5417',
    name: 'Zynga',
    short_name: 'ZNGA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5418',
    name: 'PDC Energy',
    short_name: 'PDCE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5419',
    name: 'Ever-Glory',
    short_name: 'EVK',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5420',
    name: 'Full House Resorts Inc',
    short_name: 'FLL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5421',
    name: 'Iteris',
    short_name: 'ITI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5422',
    name: 'Mountain Province Diamonds',
    short_name: 'MPVDF',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5423',
    name: 'Orion Energy',
    short_name: 'OESX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5424',
    name: 'TravelCenters of America LLC',
    short_name: 'TA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5425',
    name: 'Tecnoglass',
    short_name: 'TGLS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5426',
    name: 'ClearSign',
    short_name: 'CLIR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5427',
    name: 'Caesarstone',
    short_name: 'CSTE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5428',
    name: 'Orbital Energy Group',
    short_name: 'OEG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5429',
    name: 'Caesars',
    short_name: 'CZR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5430',
    name: 'DLH Holdings',
    short_name: 'DLHC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5431',
    name: 'Enphase',
    short_name: 'ENPH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5432',
    name: 'Five Below',
    short_name: 'FIVE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5433',
    name: 'Fiesta',
    short_name: 'FRGI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5434',
    name: 'Sonnet Biotherapeutics Holdings',
    short_name: 'SONN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5435',
    name: 'MACOM Tech',
    short_name: 'MTSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5436',
    name: 'Turtle Beach',
    short_name: 'HEAR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5437',
    name: 'Renewable Energy',
    short_name: 'REGI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5438',
    name: 'SAExploration',
    short_name: 'SAEXQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5439',
    name: 'Bloomin Brands',
    short_name: 'BLMN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5440',
    name: "Chuy's Holdings",
    short_name: 'CHUY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5441',
    name: 'WW International',
    short_name: 'WW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5442',
    name: 'Sears Hometown&Outlet',
    short_name: 'SHOS',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5443',
    name: 'Iconix Brand',
    short_name: 'ICON',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5444',
    name: 'Westport Fuel',
    short_name: 'WPRT',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5445',
    name: 'Yield10 Bioscience',
    short_name: 'YTEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5446',
    name: 'Fossil',
    short_name: 'FOSL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5447',
    name: 'ANGI Homeservices',
    short_name: 'ANGI',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5448',
    name: 'The Wendy\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s Co',
    short_name: 'WEN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5449',
    name: 'Groupon',
    short_name: 'GRPN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5450',
    name: 'Lincoln Electrics',
    short_name: 'LECO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5451',
    name: 'Elbit Systems',
    short_name: 'ESLT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5452',
    name: 'Visteon',
    short_name: 'VC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5453',
    name: 'Travelzoo',
    short_name: 'TZOO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5454',
    name: 'AMC Networks',
    short_name: 'AMCX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5455',
    name: 'Century Aluminum',
    short_name: 'CENX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5456',
    name: 'Melco Resorts & Entertainment',
    short_name: 'MLCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5457',
    name: 'Penn National Gaming',
    short_name: 'PENN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5458',
    name: 'Trimble',
    short_name: 'TRMB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5459',
    name: 'Ambarella',
    short_name: 'AMBA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5460',
    name: 'Lifevantage',
    short_name: 'LFVN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5461',
    name: 'Taronis Tech',
    short_name: 'TRNX',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5462',
    name: 'Tile Shop Holdings',
    short_name: 'TTSH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5463',
    name: 'Vertex Energy',
    short_name: 'VTNR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5464',
    name: 'The ExOne',
    short_name: 'XONE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5465',
    name: 'Diversified Restaurant Hld',
    short_name: 'SAUC_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5466',
    name: 'Hemisphere',
    short_name: 'HMTV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5467',
    name: 'Professional Diversity',
    short_name: 'IPDN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5468',
    name: 'MICT',
    short_name: 'MICT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5469',
    name: 'Digital Turbine',
    short_name: 'APPS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5470',
    name: 'National Research',
    short_name: 'NRC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5471',
    name: 'Supercom Lt',
    short_name: 'SPCB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5472',
    name: 'Lindblad Expeditions',
    short_name: 'LIND',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5473',
    name: 'Fox Factory',
    short_name: 'FOXF',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5474',
    name: 'HD Supply',
    short_name: 'HDS',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5475',
    name: 'Marron Bio',
    short_name: 'MBII',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5476',
    name: 'NV5 Global',
    short_name: 'NVEE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5477',
    name: 'Noodles & Co',
    short_name: 'NDLS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5478',
    name: 'Pattern Energy',
    short_name: 'PEGI_old',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5479',
    name: 'Sprouts Farmers',
    short_name: 'SFM',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5480',
    name: 'BMC Stock Hldgs',
    short_name: 'BMCH',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5481',
    name: 'Pioneer Pow',
    short_name: 'PPSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5482',
    name: 'Sequential',
    short_name: 'SQBGQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5483',
    name: 'Potbelly Co',
    short_name: 'PBPB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5484',
    name: 'LGI Homes',
    short_name: 'LGIH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5485',
    name: 'Extended Stay America',
    short_name: 'STAY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5486',
    name: 'Huttig Building',
    short_name: 'HBP',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5487',
    name: 'Ideal Power Inc',
    short_name: 'IPWR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5488',
    name: 'Ricebran Tech',
    short_name: 'RIBT',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5489',
    name: 'Houghton Mifflin',
    short_name: 'HMHC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5490',
    name: 'Meta Materials',
    short_name: 'MMAT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5491',
    name: 'Reed\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s',
    short_name: 'REED',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5492',
    name: 'Genius Brands International Inc',
    short_name: 'GNUS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5493',
    name: 'Workhorse Grp',
    short_name: 'WKHS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5494',
    name: 'Paysign',
    short_name: 'PAYS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5495',
    name: 'Beam Global',
    short_name: 'BEEM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5496',
    name: 'Alkaline Water',
    short_name: 'WTER',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5497',
    name: 'B. Riley Financial',
    short_name: 'RILY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5498',
    name: 'Cemtrex',
    short_name: 'CETX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5499',
    name: 'Cryoport Inc',
    short_name: 'CYRX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5500',
    name: 'Staffing 360',
    short_name: 'STAF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5501',
    name: 'Vuzix Corp Cmn Stk',
    short_name: 'VUZI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5502',
    name: 'Nextplay Technologies',
    short_name: 'NXTP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5503',
    name: 'Sigma Labs',
    short_name: 'SGLB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5504',
    name: 'Youngevity International',
    short_name: 'YGYI',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5505',
    name: 'BIO-Key',
    short_name: 'BKYI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5506',
    name: 'Coda Octopus',
    short_name: 'CODA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5507',
    name: 'Aemetis Inc',
    short_name: 'AMTX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5508',
    name: 'Celsius',
    short_name: 'CELH',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5509',
    name: 'Blink Charging',
    short_name: 'BLNK',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5510',
    name: 'OPTIMIZERx',
    short_name: 'OPRX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5511',
    name: 'SRAX',
    short_name: 'SRAX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5512',
    name: 'ALJ Regional',
    short_name: 'ALJJ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5513',
    name: 'Chromadex Corp',
    short_name: 'CDXC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5514',
    name: 'Epsilon Energy',
    short_name: 'EPSN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5515',
    name: 'Global Water',
    short_name: 'GWRS',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5516',
    name: 'Natural Health Trend',
    short_name: 'NHTC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5517',
    name: 'Lipocine',
    short_name: 'LPCN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5518',
    name: 'Del Taco Restaurants',
    short_name: 'TACO',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5519',
    name: 'Blue Bird',
    short_name: 'BLBD',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5520',
    name: 'Profire Ene',
    short_name: 'PFIE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5521',
    name: 'Nova Lifestyle I',
    short_name: 'NVFY',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5522',
    name: 'Tarena Intl Adr',
    short_name: 'TEDU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5523',
    name: 'Amark Preci',
    short_name: 'AMRK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5524',
    name: 'Energous Co',
    short_name: 'WATT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5525',
    name: 'Paylocity Holdng',
    short_name: 'PCTY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5526',
    name: 'Malibu Boats Inc',
    short_name: 'MBUU',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5527',
    name: 'Lands\u00c2\u00a2\u00c2\u20ac\u00c2\u2122 End',
    short_name: 'LE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5528',
    name: 'AgroFresh Solutions',
    short_name: 'AGFS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5529',
    name: 'Sportsmans',
    short_name: 'SPWH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5530',
    name: 'Sabre Corpo',
    short_name: 'SABR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5531',
    name: 'Phibro',
    short_name: 'PAHC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5532',
    name: 'Tuniu Corp',
    short_name: 'TOUR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5533',
    name: 'Truecar Inc',
    short_name: 'TRUE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5534',
    name: 'GoPro Inc',
    short_name: 'GPRO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5535',
    name: 'Atlantica Sustainable Infrastructure',
    short_name: 'AY',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5536',
    name: 'Michaels',
    short_name: 'MIK',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5537',
    name: 'Quest Resource',
    short_name: 'QRHC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5538',
    name: 'Tecogen Inc',
    short_name: 'TGEN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5539',
    name: 'Viper Energy Ut',
    short_name: 'VNOM',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5540',
    name: 'Xunlei Ltd Adr',
    short_name: 'XNET',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5541',
    name: 'TerraForm Power',
    short_name: 'TERP_old',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5542',
    name: 'El Pollo Loco Holdings Inc',
    short_name: 'LOCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5543',
    name: 'Trupanion Inc',
    short_name: 'TRUP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5544',
    name: 'Energy Focu',
    short_name: 'EFOI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5545',
    name: 'Marathon Digital',
    short_name: 'MARA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5546',
    name: 'Liberty Media Formula C',
    short_name: 'FWONK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5547',
    name: 'CareCloud',
    short_name: 'MTBC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5548',
    name: 'Medavail Holdings',
    short_name: 'MDVL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5549',
    name: 'Spark Energy Inc',
    short_name: 'SPKE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5550',
    name: 'Wilhelmina',
    short_name: 'WHLM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5551',
    name: 'Liberty Tripadvisor',
    short_name: 'LTRPB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5552',
    name: 'Limbach Holdings',
    short_name: 'LMB',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5553',
    name: 'Eldorado Resorts LLC',
    short_name: 'ERI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5554',
    name: 'Liberty Tri',
    short_name: 'LTRPA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5555',
    name: 'Dave & Buster\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s Entertainment',
    short_name: 'PLAY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5556',
    name: 'Applied DNA Sciences Inc',
    short_name: 'APDN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5557',
    name: 'Habit Restaurants Inc',
    short_name: 'HABT_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5558',
    name: 'Freshpet Inc',
    short_name: 'FRPT',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5559',
    name: 'Inspired Entertainment',
    short_name: 'INSE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5560',
    name: 'Liberty Broadband Srs A',
    short_name: 'LBRDA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5561',
    name: 'Liberty Broadband Srs C',
    short_name: 'LBRDK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5562',
    name: 'Kimball Electronics',
    short_name: 'KE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5563',
    name: 'Sky Solar Holdings Adr Rep 8',
    short_name: 'SKYS',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5564',
    name: 'Tribune Publishing',
    short_name: 'TPCO',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5565',
    name: 'Inovalon Holdings Inc',
    short_name: 'INOV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5566',
    name: 'Tantech Holdings Ltd',
    short_name: 'TANH',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5567',
    name: 'LiqTech',
    short_name: 'LIQT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5568',
    name: 'Etsy Inc',
    short_name: 'ETSY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5569',
    name: 'Kornit Digital Ltd',
    short_name: 'KRNT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5570',
    name: 'SolarEdge Technologies Inc',
    short_name: 'SEDG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5571',
    name: 'One Group Hospitality',
    short_name: 'STKS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5572',
    name: 'Urban Tea',
    short_name: 'MYT_old',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5573',
    name: 'Davidstea Inc',
    short_name: 'DTEA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5574',
    name: 'Nextdecade',
    short_name: 'NEXT',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5575',
    name: 'Wingstop Inc',
    short_name: 'WING',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5576',
    name: 'Stars Group',
    short_name: 'TSG_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5577',
    name: 'WildBrain',
    short_name: 'WLDBF',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5578',
    name: 'Liberty Latin America',
    short_name: 'LILA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5579',
    name: 'Liberty Latin America C',
    short_name: 'LILAK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5580',
    name: 'Mercurity Fintech ADR',
    short_name: 'MFH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5581',
    name: 'Hailiang Education Group Inc',
    short_name: 'HLG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5582',
    name: 'Aqua Metals Inc',
    short_name: 'AQMS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5583',
    name: 'Green Plains Partners LP',
    short_name: 'GPP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5584',
    name: 'Mastercraft Boat',
    short_name: 'MCFT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5585',
    name: 'Ollies Bargain Outlet Holdings Inc',
    short_name: 'OLLI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5586',
    name: 'Sunrun Inc',
    short_name: 'RUN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5587',
    name: 'Usio',
    short_name: 'USIO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5588',
    name: 'CSW Industrials Inc',
    short_name: 'CSWI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5589',
    name: 'Fuling Global Inc',
    short_name: 'FORK',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5590',
    name: 'Purple Innovation',
    short_name: 'PRPL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5591',
    name: 'Newage Inc',
    short_name: 'NBEV',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5592',
    name: 'Akoustis Tech',
    short_name: 'AKTS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5593',
    name: 'Duluth Holdings Inc',
    short_name: 'DLTH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5594',
    name: 'Hostess Brands',
    short_name: 'TWNK',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5595',
    name: 'China Customer Relations Centers',
    short_name: 'CCRC',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5596',
    name: 'Cenntro Electric Group',
    short_name: 'NAKD',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5597',
    name: 'SPI Energy',
    short_name: 'SPI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5598',
    name: 'Nano Dimension',
    short_name: 'NNDM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5599',
    name: 'Nuvectra',
    short_name: 'NVTRQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5600',
    name: 'Rosehill Resources A',
    short_name: 'ROSEQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5601',
    name: 'Liberty Media Braves A',
    short_name: 'BATRA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5602',
    name: 'Liberty Media Braves C',
    short_name: 'BATRK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5603',
    name: 'Liberty Media SiriusXM A',
    short_name: 'LSXMA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5604',
    name: 'Liberty Media SiriusXM B',
    short_name: 'LSXMB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5605',
    name: 'Liberty Media SiriusXM C',
    short_name: 'LSXMK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5606',
    name: 'Centennial Res Dev',
    short_name: 'CDEV',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5607',
    name: 'Red Rock Resorts',
    short_name: 'RRR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5608',
    name: 'Lonestar Resources US',
    short_name: 'LONEQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5609',
    name: 'Innovate Biopharma',
    short_name: 'NMTR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5610',
    name: 'Estre USA A',
    short_name: 'ESTRF',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5611',
    name: 'TPI Composites',
    short_name: 'TPIC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5612',
    name: 'VistaGen Therapeutics',
    short_name: 'VTGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5613',
    name: 'Waitr',
    short_name: 'WTRH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5614',
    name: 'SUNDANCE ENERGY INC',
    short_name: 'SNDEQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5615',
    name: 'Trade Desk',
    short_name: 'TTD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5616',
    name: 'Fluent',
    short_name: 'FLNT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5617',
    name: 'Shineco',
    short_name: 'TYHT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5618',
    name: 'Scworx',
    short_name: 'WORX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5619',
    name: 'Infrastructure Energy Alternatives',
    short_name: 'IEA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5620',
    name: 'Mammoth Energy Services',
    short_name: 'TUSK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5621',
    name: 'Extraction Oil & Gas',
    short_name: 'XOGAQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5622',
    name: 'Forterra',
    short_name: 'FRTA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5623',
    name: 'Smart Sand',
    short_name: 'SND',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5624',
    name: 'Phunware',
    short_name: 'PHUN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5625',
    name: 'SenesTech',
    short_name: 'SNES',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5626',
    name: 'Priority Tech',
    short_name: 'PRTH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5627',
    name: 'Polar Power',
    short_name: 'POLA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5628',
    name: 'Trivago',
    short_name: 'TRVG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5629',
    name: 'Yatra Online',
    short_name: 'YTRA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5630',
    name: 'Nisun International',
    short_name: 'NISN',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5631',
    name: 'VivoPower Intl',
    short_name: 'VVPR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5632',
    name: 'Laureate Education',
    short_name: 'LAUR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5633',
    name: 'Ramaco Resources',
    short_name: 'METC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5634',
    name: 'Attis Industries',
    short_name: 'ATIS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5635',
    name: 'iFresh Inc',
    short_name: 'IFMK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5636',
    name: 'Playa Hotels & Resorts',
    short_name: 'PLYA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5637',
    name: 'Valeritas Inc',
    short_name: 'VLRXQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5638',
    name: 'Verra Mobility',
    short_name: 'VRRM',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5639',
    name: 'NCS Multistage',
    short_name: 'NCSM',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5640',
    name: 'Kinetik Holdings',
    short_name: 'ALTM',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5641',
    name: 'National Energy Services',
    short_name: 'NESR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5642',
    name: 'Shotspotter',
    short_name: 'SSTI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5643',
    name: 'Boston Omaha',
    short_name: 'BOMN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5644',
    name: 'ShiftPixy',
    short_name: 'PIXY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5645',
    name: 'SG Blocks',
    short_name: 'SGBX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5646',
    name: 'Newater Technology',
    short_name: 'NEWA',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5647',
    name: 'Eastside Distilling',
    short_name: 'EAST',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5648',
    name: 'Integrated Media Tech',
    short_name: 'IMTE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5649',
    name: 'Chicken Soup',
    short_name: 'CSSE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5650',
    name: 'Concrete Pumping A',
    short_name: 'BBCP',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5651',
    name: 'ZK International',
    short_name: 'ZKIN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5652',
    name: 'Hf Foods',
    short_name: 'HFFG',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5653',
    name: 'Secoo Holding',
    short_name: 'SECO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5654',
    name: 'Roku',
    short_name: 'ROKU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5655',
    name: 'Arcimoto',
    short_name: 'FUV',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5656',
    name: 'TDH Holdings',
    short_name: 'PETZ',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5657',
    name: 'CarGurus',
    short_name: 'CARG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5658',
    name: 'LiveOne',
    short_name: 'LIVX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5659',
    name: 'FAT Brands',
    short_name: 'FAT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5660',
    name: 'RISE Education Cayman',
    short_name: 'REDU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5661',
    name: 'Reebonz',
    short_name: 'RBZHF',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5662',
    name: 'National Vision',
    short_name: 'EYE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5663',
    name: 'Allied Esports Entertainment',
    short_name: 'AESE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5664',
    name: 'Funko',
    short_name: 'FNKO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5665',
    name: 'Sleep Number',
    short_name: 'SNBR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5666',
    name: 'Renovare Environmental',
    short_name: 'BHTG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5667',
    name: 'Kaixin Auto',
    short_name: 'KXIN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5668',
    name: 'Stitch Fix',
    short_name: 'SFIX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5669',
    name: 'OneSpaWorld',
    short_name: 'OSW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5670',
    name: 'ReTo Eco-Solutions',
    short_name: 'RETO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5671',
    name: 'Boxlight A',
    short_name: 'BOXL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5672',
    name: 'iClick Interactive Asia',
    short_name: 'ICLK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5673',
    name: 'Dogness A',
    short_name: 'DOGZ',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5674',
    name: 'Dolphin Entertainment',
    short_name: 'DLPN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5675',
    name: 'Cardlytics',
    short_name: 'CDLX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5676',
    name: 'Sitio Royalties',
    short_name: 'FLMN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5677',
    name: 'Farmmi',
    short_name: 'FAMI',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5678',
    name: 'Cronos',
    short_name: 'CRON',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5679',
    name: 'Lazydays',
    short_name: 'LAZY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5680',
    name: 'VERB TECH',
    short_name: 'VERB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5681',
    name: 'Bilibili',
    short_name: 'BILI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5682',
    name: 'iQIYI',
    short_name: 'IQ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5683',
    name: 'HeadHunter ADR',
    short_name: 'HHR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5684',
    name: 'Construction Partners',
    short_name: 'ROAD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5685',
    name: 'Lovesac',
    short_name: 'LOVE',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5686',
    name: 'EVO Payments',
    short_name: 'EVOP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5687',
    name: 'GreenSky',
    short_name: 'GSKY',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5688',
    name: 'Pluralsight',
    short_name: 'PS',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5689',
    name: 'Jerash',
    short_name: 'JRSH',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5690',
    name: 'Vinco Ventures',
    short_name: 'BBIG',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5691',
    name: 'Piedmont Lithium ADR',
    short_name: 'PLL',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5692',
    name: 'Uxin',
    short_name: 'UXIN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5693',
    name: 'EverQuote A',
    short_name: 'EVER',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5694',
    name: 'Hirequest',
    short_name: 'HQI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5695',
    name: 'Wrap Tech',
    short_name: 'WRAP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5696',
    name: 'HyreCar',
    short_name: 'HYRE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5697',
    name: 'Tilray',
    short_name: 'TLRY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5698',
    name: 'Berry Petroleum',
    short_name: 'BRY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5699',
    name: 'Sonos',
    short_name: 'SONO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5700',
    name: 'Repay Holdings',
    short_name: 'RPAY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5701',
    name: 'Pinduoduo',
    short_name: 'PDD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5702',
    name: 'WiSA Tech',
    short_name: 'WISA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5703',
    name: 'Cumulus Media A',
    short_name: 'CMLS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5704',
    name: 'Electrameccanica Vehicles',
    short_name: 'SOLO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5705',
    name: 'Select Interior A',
    short_name: 'SIC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5706',
    name: 'GreenPro',
    short_name: 'GRNQ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5707',
    name: 'KLX Energy',
    short_name: 'KLXE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5708',
    name: 'Frontdoor',
    short_name: 'FTDR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5709',
    name: 'BRP Inc',
    short_name: 'DOOO',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5710',
    name: '111 Inc',
    short_name: 'YI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5711',
    name: 'Viomi Technology',
    short_name: 'VIOT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5712',
    name: 'Arco Platform ',
    short_name: 'ARCE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5713',
    name: 'Upwork',
    short_name: 'UPWK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5714',
    name: 'Niu Tech',
    short_name: 'NIU',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5715',
    name: 'OrganiGram Holdings Inc',
    short_name: 'OGI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5716',
    name: 'StoneCo',
    short_name: 'STNE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5717',
    name: 'TuanChe ',
    short_name: 'TC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5718',
    name: 'Legacy Housing',
    short_name: 'LEGH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5719',
    name: 'New Fortress Energy',
    short_name: 'NFE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5720',
    name: 'Toughbuilt Industries',
    short_name: 'TBLT',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5721',
    name: 'American Resources',
    short_name: 'AREC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5722',
    name: 'Village Farms',
    short_name: 'VFF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5723',
    name: 'LYFT',
    short_name: 'LYFT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5724',
    name: 'Tradeweb Markets',
    short_name: 'TW',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5725',
    name: 'Greenlane',
    short_name: 'GNLN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5726',
    name: 'Beyond Meat',
    short_name: 'BYND',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5727',
    name: 'Wah Fu Education',
    short_name: 'WAFU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5728',
    name: 'ATIF Holdings',
    short_name: 'ATIF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5729',
    name: 'Luckin Coffee',
    short_name: 'LKNCY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5730',
    name: 'Rattler Midstream',
    short_name: 'RTLR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5731',
    name: 'iHeartMedia A',
    short_name: 'IHRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5732',
    name: 'Paringa Resources',
    short_name: 'PNRLY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '5733',
    name: 'Grocery Outlet',
    short_name: 'GO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5734',
    name: 'TheRealReal',
    short_name: 'REAL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5735',
    name: 'Wanda Sports',
    short_name: 'WSG',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5736',
    name: 'Kura Sushi',
    short_name: 'KRUS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5737',
    name: 'Sundial Growers',
    short_name: 'SNDL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5738',
    name: 'Blue Hat',
    short_name: 'BHAT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5739',
    name: 'Xpel',
    short_name: 'XPEL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '5740',
    name: 'Peloton Interactive',
    short_name: 'PTON',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6156',
    name: 'Safety Insurance',
    short_name: 'SAFT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6157',
    name: 'State Auto',
    short_name: 'STFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6158',
    name: 'Fednat Holding Co',
    short_name: 'FNHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6159',
    name: 'United Fire',
    short_name: 'UFCS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6160',
    name: 'Unico',
    short_name: 'UNAM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6161',
    name: 'Atlas Financials',
    short_name: 'AFHIF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6162',
    name: 'Benefytt Tech',
    short_name: 'BFYT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6163',
    name: 'United Insurances',
    short_name: 'UIHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6164',
    name: 'Ambac',
    short_name: 'AMBC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6165',
    name: 'Mr. Cooper',
    short_name: 'COOP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6166',
    name: 'FG Financial',
    short_name: 'FGF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6167',
    name: 'Oxbridge Re',
    short_name: 'OXBR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6168',
    name: 'GWG Holdings Inc',
    short_name: 'GWGH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6169',
    name: 'James River Group',
    short_name: 'JRVR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6170',
    name: 'Conifer Holding Inc',
    short_name: 'CNFR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6171',
    name: 'Kinsale Capital',
    short_name: 'KNSL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6172',
    name: 'NI Holdings',
    short_name: 'NODK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6173',
    name: 'Goosehead Insurance',
    short_name: 'GSHD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6174',
    name: 'Watford',
    short_name: 'WTRE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6175',
    name: 'Palomar',
    short_name: 'PLMR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6200',
    name: 'Vipshop',
    short_name: 'VIPS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6201',
    name: 'YY A',
    short_name: 'YY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6202',
    name: 'Shutterstock',
    short_name: 'SSTK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6203',
    name: 'Autohome ADR',
    short_name: 'ATHM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6204',
    name: 'Alibaba ADR',
    short_name: 'BABA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6205',
    name: 'Wayfair Inc',
    short_name: 'W',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6206',
    name: 'New Relic Inc',
    short_name: 'NEWR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6207',
    name: 'Godaddy Inc',
    short_name: 'GDDY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6208',
    name: 'Snap',
    short_name: 'SNAP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6209',
    name: 'Switch',
    short_name: 'SWCH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6210',
    name: 'Sea',
    short_name: 'SE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6211',
    name: 'SOGOU',
    short_name: 'SOGO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6212',
    name: 'Eventbrite A',
    short_name: 'EB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6213',
    name: 'Anaplan',
    short_name: 'PLAN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6283',
    name: 'Vidler Water Resources',
    short_name: 'VWTR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6284',
    name: 'Siebert',
    short_name: 'SIEB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6285',
    name: 'Security National Financial',
    short_name: 'SNFCA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6286',
    name: 'Stratus',
    short_name: 'STRS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6287',
    name: 'Virtus',
    short_name: 'VRTS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6288',
    name: 'WisdomTree',
    short_name: 'WETF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6289',
    name: 'World Acceptance',
    short_name: 'WRLD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6290',
    name: 'American Virtual Cloud',
    short_name: 'AVCT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6291',
    name: 'Office Properties',
    short_name: 'OPI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6292',
    name: 'Creative Media Community Trust',
    short_name: 'CMCT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6293',
    name: 'Performant',
    short_name: 'PFMT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6294',
    name: 'Moneygram',
    short_name: 'MGI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6295',
    name: 'Carlyle Group',
    short_name: 'CG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6296',
    name: 'Altisource Portfolio Solutions',
    short_name: 'ASPS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6297',
    name: 'Gladstone Land',
    short_name: 'LAND',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6298',
    name: 'Wheeler REIT',
    short_name: 'WHLR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6299',
    name: 'JX Luxventure',
    short_name: 'KBSF',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6300',
    name: 'Harvest',
    short_name: 'HCAP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6301',
    name: 'QIWI',
    short_name: 'QIWI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6302',
    name: 'Logan Ridge Finance',
    short_name: 'LRFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6303',
    name: 'China Bat',
    short_name: 'GLG',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6304',
    name: 'Tiptree',
    short_name: 'TIPT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6305',
    name: 'Silvercrest Asset Management Group',
    short_name: 'SAMG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6306',
    name: 'NMI Holdings',
    short_name: 'NMIH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6307',
    name: 'National Holdings',
    short_name: 'NHLD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6308',
    name: 'Kintara Therapeutics',
    short_name: 'KTRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6309',
    name: 'IZEA',
    short_name: 'IZEA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6310',
    name: 'Ability',
    short_name: 'ABILF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6311',
    name: 'Jason Industries',
    short_name: 'JASNQ',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6312',
    name: 'Hennessy Ad',
    short_name: 'HNNA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6313',
    name: 'Investar Holding',
    short_name: 'ISTR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6314',
    name: 'MMA Capital Management LLC',
    short_name: 'MMAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6315',
    name: 'Wins Finance Holdings',
    short_name: 'WINSF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6316',
    name: 'Virtu Financial Inc',
    short_name: 'VIRT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6317',
    name: 'Brookfield Property',
    short_name: 'BPY',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6318',
    name: 'WillScot A',
    short_name: 'WSC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6319',
    name: 'Target Hospitality',
    short_name: 'TH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6320',
    name: 'CPI Card',
    short_name: 'PMTS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6321',
    name: 'Aspen Group',
    short_name: 'ASPU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6322',
    name: 'Reven Housing Reit',
    short_name: 'RVEN_old',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6323',
    name: 'LM Funding America',
    short_name: 'LMFA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6324',
    name: 'RMR Group Inc',
    short_name: 'RMR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6325',
    name: 'Code Chain New Continent Ltd',
    short_name: 'CCNC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6326',
    name: 'Global Self Storage',
    short_name: 'SELF',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6327',
    name: 'iSun',
    short_name: 'ISUN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6328',
    name: 'Datasea',
    short_name: 'DTSS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6329',
    name: 'Yintech Investment',
    short_name: 'YIN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6330',
    name: 'FlexShopper Inc',
    short_name: 'FPAY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6331',
    name: 'Hamilton Lane',
    short_name: 'HLNE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6332',
    name: 'International Money Express',
    short_name: 'IMXI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6333',
    name: 'ICC Holding',
    short_name: 'ICCH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6334',
    name: 'Foresight Autonomous',
    short_name: 'FRSX',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6335',
    name: 'Redfin',
    short_name: 'RDFN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6336',
    name: 'Freight Tech',
    short_name: 'HUSN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6337',
    name: 'Rekor Systems',
    short_name: 'REKR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6338',
    name: 'Tremont Mortgage',
    short_name: 'TRMT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6339',
    name: 'Akso Health DRC',
    short_name: 'HX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6340',
    name: '180 Life Sciences',
    short_name: 'ATNF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6341',
    name: 'Dragon Victory',
    short_name: 'LYL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6342',
    name: 'Sentinel Energy A',
    short_name: 'STNL_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6343',
    name: 'Meridian Bank',
    short_name: 'MRBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6344',
    name: 'NRX Pharmaceuticals',
    short_name: 'NRXP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6345',
    name: 'Lexinfintech',
    short_name: 'LX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6346',
    name: 'Open Lending',
    short_name: 'LPRO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6347',
    name: 'Industrial Logistics Properties',
    short_name: 'ILPT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6348',
    name: 'Ensysce Biosciences',
    short_name: 'ENSC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6349',
    name: 'Victory Capital',
    short_name: 'VCTR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6350',
    name: 'Adapthealth',
    short_name: 'AHCO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6351',
    name: 'Hall of Fame Resort Entr.',
    short_name: 'HOFV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6352',
    name: 'Hycroft Mining Holding Corporation',
    short_name: 'HYMC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6353',
    name: 'Burgerfi International',
    short_name: 'BFI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6354',
    name: 'Senmiao Tech',
    short_name: 'AIHS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6355',
    name: 'Bit Digital',
    short_name: 'BTBT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6356',
    name: 'Broadmark Realty Capital',
    short_name: 'BRMK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6357',
    name: 'International General Insurance',
    short_name: 'IGIC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6358',
    name: 'Mogo',
    short_name: 'MOGO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6359',
    name: 'VectoIQ',
    short_name: 'VTIQ_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6360',
    name: 'eXp World',
    short_name: 'EXPI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6361',
    name: 'Focus Financial Partners',
    short_name: 'FOCS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6362',
    name: 'Landsea Homes',
    short_name: 'LSEA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6363',
    name: 'Brooge Holdings Ltd',
    short_name: 'BROG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6364',
    name: 'HL Acquisitions',
    short_name: 'HCCH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6365',
    name: 'Necessity Retail REIT',
    short_name: 'AFIN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6366',
    name: 'Tattooed Chef',
    short_name: 'TTCF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6367',
    name: 'Tottenham Acquisition I',
    short_name: 'TOTA_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6368',
    name: 'Greenland Acquisition',
    short_name: 'GTEC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6369',
    name: 'Allegro Merger',
    short_name: 'ALGR_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6370',
    name: 'Reviva Pharmaceuticals Holdings',
    short_name: 'RVPH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6371',
    name: '4D Pharma ADR',
    short_name: 'LBPS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6372',
    name: 'Lottery.com',
    short_name: 'TDAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6373',
    name: 'Glory Star New Media Group Holdings Ltd',
    short_name: 'GSMG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6374',
    name: 'Nautilus Biotechnology',
    short_name: 'ARYA_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6375',
    name: 'Grid Dynamics',
    short_name: 'GDYN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6376',
    name: 'Betterware De Mexico',
    short_name: 'BWMX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6377',
    name: 'Alberton Acquisition',
    short_name: 'ALAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6378',
    name: '360 Finance',
    short_name: 'QFIN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6379',
    name: 'Meten Edtechx Education',
    short_name: 'METX',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6380',
    name: 'Gores Holdings III A',
    short_name: 'GRSH_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6381',
    name: 'Sirius Intl',
    short_name: 'SG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6382',
    name: 'Advent Technologies Holdings',
    short_name: 'ADN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6383',
    name: 'Atlas Technical Consultants',
    short_name: 'ATCX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6384',
    name: 'Paya Holdings',
    short_name: 'PAYA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6385',
    name: 'GCM Grosvenor',
    short_name: 'GCMG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6386',
    name: 'Medalist Diversified',
    short_name: 'MDRR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6387',
    name: 'Jiayin',
    short_name: 'JFIN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6388',
    name: 'Puhui Wealth Invest',
    short_name: 'PHCF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6389',
    name: 'MDJM',
    short_name: 'MDJH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6390',
    name: 'MMTEC',
    short_name: 'MTC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6391',
    name: 'Schultze Special',
    short_name: 'SAMA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6392',
    name: 'Luminar Tech',
    short_name: 'LAZR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6393',
    name: 'Scienjoy Holding',
    short_name: 'SJ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6394',
    name: 'AerSale',
    short_name: 'ASLE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6395',
    name: 'Lordstown Motors',
    short_name: 'RIDE',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6396',
    name: 'Microvast Holdings',
    short_name: 'MVST',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6397',
    name: 'Up Fintech',
    short_name: 'TIGR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6398',
    name: 'Canoo',
    short_name: 'GOEV',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6399',
    name: 'LiveVox Holdings',
    short_name: 'LVOX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6400',
    name: 'Eqonex',
    short_name: 'EQOS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6401',
    name: 'Freedom',
    short_name: 'FRHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6402',
    name: 'Positive Physicians',
    short_name: 'PPHI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6403',
    name: 'Puyi ADR',
    short_name: 'PUYI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6404',
    name: 'Stryve Foods',
    short_name: 'SNAX',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6405',
    name: 'Carlotz',
    short_name: 'LOTZ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6406',
    name: 'South Plains Financial',
    short_name: 'SPFI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6407',
    name: 'Whole Earth Brands',
    short_name: 'FREE',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6408',
    name: '9F',
    short_name: 'JFU',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6409',
    name: 'Alerus Fin',
    short_name: 'ALRS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6410',
    name: 'Oportun Financial',
    short_name: 'OPRT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6478',
    name: 'Preformed Line',
    short_name: 'PLPC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6479',
    name: 'Partner ADR',
    short_name: 'PTNR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6480',
    name: 'Socket Mobile',
    short_name: 'SCKT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6481',
    name: 'Superconductor',
    short_name: 'SCON',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6482',
    name: 'SeaChange',
    short_name: 'SEAC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6483',
    name: 'Shenandoah',
    short_name: 'SHEN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6484',
    name: 'Sierra Wireless',
    short_name: 'SWIR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6485',
    name: 'Technical Communications',
    short_name: 'TCCO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6486',
    name: 'TESSCO',
    short_name: 'TESS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6487',
    name: 'Spok Holdings',
    short_name: 'SPOK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6488',
    name: 'VOXX',
    short_name: 'VOXX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6489',
    name: 'Quarterhill',
    short_name: 'QTRHF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6490',
    name: 'Westell Tech',
    short_name: 'WSTL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6491',
    name: 'DZS',
    short_name: 'DZSI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6492',
    name: 'LM Ericsson B ADR',
    short_name: 'ERIC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6494',
    name: 'VEON',
    short_name: 'VEON',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6495',
    name: 'Pareteum',
    short_name: 'TEUM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '6496',
    name: 'Otelco',
    short_name: 'OTEL',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6497',
    name: 'Applied Opt',
    short_name: 'AAOI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6498',
    name: 'Vislink Tech',
    short_name: 'VISL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6499',
    name: 'Sunworks',
    short_name: 'SUNW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6500',
    name: 'Millicom',
    short_name: 'TIGO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6501',
    name: 'Resonant Inc',
    short_name: 'RESN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6502',
    name: 'Cps Technologies',
    short_name: 'CPSH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6503',
    name: 'Anterix',
    short_name: 'ATEX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6504',
    name: 'Xcel Brands Inc',
    short_name: 'XELB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6505',
    name: 'Acacia Com',
    short_name: 'ACIA',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6506',
    name: 'Airgain',
    short_name: 'AIRG',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6507',
    name: 'Casa Systems',
    short_name: 'CASA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6508',
    name: 'Zoom Video',
    short_name: 'ZM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6509',
    name: 'Sonim Technologies',
    short_name: 'SONM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6510',
    name: 'Cambium Networks',
    short_name: 'CMBM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6557',
    name: 'PAM',
    short_name: 'PTSI',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6558',
    name: 'Saia',
    short_name: 'SAIA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6559',
    name: 'Star Bulk Carriers',
    short_name: 'SBLK',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6560',
    name: 'Seanergy Maritime',
    short_name: 'SHIP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6561',
    name: 'Singularity Future Tech',
    short_name: 'SINO',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6562',
    name: 'SkyWest',
    short_name: 'SKYW',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6563',
    name: 'Top Ships',
    short_name: 'TOPS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6564',
    name: 'Torm A',
    short_name: 'TRMD',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6565',
    name: 'Universal Logistics',
    short_name: 'ULH',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6566',
    name: 'USA Truck',
    short_name: 'USAK',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6567',
    name: 'Golden Ocean',
    short_name: 'GOGL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6568',
    name: 'Werner',
    short_name: 'WERN',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6569',
    name: 'Willis Lease',
    short_name: 'WLFC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6570',
    name: 'Air Transport Services',
    short_name: 'ATSG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6571',
    name: 'Old Dominion Freight Line',
    short_name: 'ODFL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6572',
    name: 'Patriot Transportation',
    short_name: 'PATI',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6573',
    name: 'Daseke',
    short_name: 'DSKE',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6574',
    name: 'Pyxis Tankers Inc',
    short_name: 'PXS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6575',
    name: 'EuroDry',
    short_name: 'EDRY',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6576',
    name: 'Grindrod Shipping',
    short_name: 'GRIN',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6577',
    name: 'Mesa Air',
    short_name: 'MESA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6578',
    name: 'Navios Maritime',
    short_name: 'NMCI',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6579',
    name: 'Castor Maritime',
    short_name: 'CTRM',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '6608',
    name: 'Taiwan Semiconductor',
    short_name: 'TSM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6638',
    name: 'Signet Jewelers',
    short_name: 'SIG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '6639',
    name: 'Tegna',
    short_name: 'TGNA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7166',
    name: 'Teledyne Technologies',
    short_name: 'TDY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7167',
    name: 'BWX Tech',
    short_name: 'BWXT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7203',
    name: 'Buenaventura Mining ADR',
    short_name: 'BVN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7204',
    name: 'Alamos Gold',
    short_name: 'AGI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7227',
    name: 'McEwen Mining Inc.',
    short_name: 'MUX',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7235',
    name: 'First Majestic Silver',
    short_name: 'AG',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7242',
    name: 'Osisko Gold Ro',
    short_name: 'OR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7337',
    name: 'TC Energy',
    short_name: 'TRP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7338',
    name: 'Ovintiv',
    short_name: 'OVV',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7371',
    name: 'BCE Inc',
    short_name: 'BCE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7372',
    name: 'Vonage',
    short_name: 'VG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '7388',
    name: 'BP ADR',
    short_name: 'BP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7389',
    name: 'PetroChina ADR',
    short_name: 'PTR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7390',
    name: 'TotalEnergies SE ADR',
    short_name: 'TTE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7391',
    name: 'Ecopetrol ADR',
    short_name: 'EC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7392',
    name: 'Suncor Energy',
    short_name: 'SU',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7407',
    name: 'GlaxoSmithKline ADR',
    short_name: 'GSK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7408',
    name: 'AstraZeneca ADR',
    short_name: 'AZN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '7409',
    name: 'Novo Nordisk ADR',
    short_name: 'NVO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7448',
    name: 'Universal',
    short_name: 'UVV',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7449',
    name: 'British American Tobacco ADR',
    short_name: 'BTI',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7455',
    name: 'Triumph',
    short_name: 'TGI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7496',
    name: 'Designer Brands',
    short_name: 'DBI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7497',
    name: 'American Eagle Outfitters',
    short_name: 'AEO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7498',
    name: 'Burlington Stores',
    short_name: 'BURL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7529',
    name: 'Tenneco',
    short_name: 'TEN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7530',
    name: 'Wabco',
    short_name: 'WBC',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7531',
    name: 'Lear',
    short_name: 'LEA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7532',
    name: 'Dana',
    short_name: 'DAN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7533',
    name: 'Adient',
    short_name: 'ADNT',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7675',
    name: 'CBS A',
    short_name: 'CBSa_old',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7676',
    name: 'Tribune Media Co',
    short_name: 'TRCO_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7677',
    name: 'Cable One Inc',
    short_name: 'CABO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7713',
    name: 'Watsco',
    short_name: 'WSO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7714',
    name: 'Lennox',
    short_name: 'LII',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7715',
    name: 'Louisiana-Pacific',
    short_name: 'LPX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7716',
    name: 'Generac',
    short_name: 'GNRC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7717',
    name: 'Owens Corning',
    short_name: 'OC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7730',
    name: 'CoreLogic',
    short_name: 'CLGX',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7731',
    name: 'LSC Communications',
    short_name: 'LKSDQ',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '7742',
    name: 'ManpowerGroup',
    short_name: 'MAN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7788',
    name: 'Toro',
    short_name: 'TTC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7789',
    name: 'Allison Transmission',
    short_name: 'ALSN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7790',
    name: 'AGCO',
    short_name: 'AGCO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7791',
    name: 'Trinity Industries',
    short_name: 'TRN',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7835',
    name: 'KBR',
    short_name: 'KBR',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7836',
    name: 'Valmont Industries',
    short_name: 'VMI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7837',
    name: 'Aecom Technology',
    short_name: 'ACM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7871',
    name: 'Bemis',
    short_name: 'BMS_old',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7872',
    name: 'Crown',
    short_name: 'CCK',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7873',
    name: 'Berry Global',
    short_name: 'BERY',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7951',
    name: 'Enersys',
    short_name: 'ENS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7952',
    name: 'Vishay Intertechnology',
    short_name: 'VSH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7953',
    name: 'Arrow Electronics',
    short_name: 'ARW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7954',
    name: 'WESCO',
    short_name: 'WCC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '7994',
    name: 'Sensata Tech',
    short_name: 'ST',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8071',
    name: 'Wex',
    short_name: 'WEX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8072',
    name: 'First Data Corp',
    short_name: 'FDC_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8187',
    name: 'Treehouse Foods',
    short_name: 'THS',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8188',
    name: 'Post',
    short_name: 'POST',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8189',
    name: 'Herbalife',
    short_name: 'HLF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8190',
    name: 'Darling Ingredients',
    short_name: 'DAR',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8191',
    name: 'Bunge',
    short_name: 'BG',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8192',
    name: 'Ingredion',
    short_name: 'INGR',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8193',
    name: 'Flowers Foods',
    short_name: 'FLO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8287',
    name: 'Wolverine',
    short_name: 'WWW',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8288',
    name: 'Deckers Outdoor',
    short_name: 'DECK',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8296',
    name: 'Tempur Sealy International',
    short_name: 'TPX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8352',
    name: 'Shutterfly',
    short_name: 'SFLY_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '8353',
    name: 'Sotheby\u00e2\u20ac\u2122s',
    short_name: 'BID_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8354',
    name: 'Williams-Sonoma',
    short_name: 'WSM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8355',
    name: 'Dick\u00c2\u00a2\u00c2\u20ac\u00c2\u2122s Sporting Goods',
    short_name: 'DKS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8356',
    name: 'Yelp',
    short_name: 'YELP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8357',
    name: 'Aarons',
    short_name: 'AAN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8358',
    name: 'SCI',
    short_name: 'SCI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8359',
    name: 'Bright Horizons',
    short_name: 'BFAM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8360',
    name: 'Terminix Global Holdings',
    short_name: 'TMX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8503',
    name: 'NVR',
    short_name: 'NVR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8504',
    name: 'Toll Brothers',
    short_name: 'TOL',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8521',
    name: 'Marriot Vacations Worldwide',
    short_name: 'VAC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8528',
    name: 'Energizer',
    short_name: 'ENR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8550',
    name: 'Northstar Realty Europe Corp',
    short_name: 'NRE_old',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8573',
    name: 'Enovis',
    short_name: 'CFX',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8574',
    name: 'IDEX',
    short_name: 'IEX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8575',
    name: 'MRC Global',
    short_name: 'MRC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8576',
    name: 'Kennametal',
    short_name: 'KMT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8577',
    name: 'Timken',
    short_name: 'TKR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8578',
    name: 'Welbilt',
    short_name: 'WBT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8610',
    name: 'XPO Logistics',
    short_name: 'XPO',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8611',
    name: 'Genesee&Wyoming',
    short_name: 'GWR_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8612',
    name: 'Covanta',
    short_name: 'CVA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8613',
    name: 'Now Inc',
    short_name: 'DNOW',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8990',
    name: 'Thor Industries',
    short_name: 'THO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8991',
    name: 'Polaris Industries',
    short_name: 'PII',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '8992',
    name: 'Vista Outdoor Inc',
    short_name: 'VSTO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9012',
    name: 'Gannett',
    short_name: 'GCI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9239',
    name: 'Edgewell Personal Care',
    short_name: 'EPC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9568',
    name: 'Six Flags',
    short_name: 'SIX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9569',
    name: 'Cinemark',
    short_name: 'CNK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9589',
    name: 'Aramark Holdings',
    short_name: 'ARMK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10049',
    name: 'Hertz Global Holdings MX',
    short_name: 'HTZGQ',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10253',
    name: 'Meritage',
    short_name: 'MTH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10273',
    name: 'ChampionX Corp',
    short_name: 'CHX',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10307',
    name: 'TRI Pointe Homes',
    short_name: 'TPH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10308',
    name: 'RH',
    short_name: 'RH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10360',
    name: 'Tootsie Roll Industries',
    short_name: 'TR',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10440',
    name: 'LivaNova PLC',
    short_name: 'LIVN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10516',
    name: 'Knowles Cor',
    short_name: 'KN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10614',
    name: 'Barnes&Noble',
    short_name: 'BKS_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10615',
    name: 'Winnebago Industries',
    short_name: 'WGO',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10616',
    name: 'Vitamin Shoppe',
    short_name: 'VSI_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10617',
    name: 'Unifi',
    short_name: 'UFI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10618',
    name: 'Guess',
    short_name: 'GES',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10619',
    name: 'WWE',
    short_name: 'WWE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10620',
    name: 'Buckle',
    short_name: 'BKE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10621',
    name: 'FTD Companies',
    short_name: 'FTDCQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10622',
    name: 'Cooper Stnd',
    short_name: 'CPS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10623',
    name: 'Installed Building',
    short_name: 'IBP',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10624',
    name: 'Topbuild Corp',
    short_name: 'BLD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10625',
    name: 'Barnes & Noble Education Inc',
    short_name: 'BNED',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10718',
    name: 'Cloud Peak Energy',
    short_name: 'CLDPQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10719',
    name: 'Bristow',
    short_name: 'BRSWQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10720',
    name: 'Tetra Technologies',
    short_name: 'TTI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10721',
    name: 'Pioneer Energy Services',
    short_name: 'PES_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10722',
    name: 'Tidewater',
    short_name: 'TDW',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10723',
    name: 'Unit',
    short_name: 'UNT',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10724',
    name: 'Bristow Inc',
    short_name: 'VTOL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10725',
    name: 'Exterran Corp',
    short_name: 'EXTN',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10744',
    name: 'Fidelity',
    short_name: 'LION_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10745',
    name: 'Greenhill&Co',
    short_name: 'GHL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10746',
    name: 'Central Pacific Financial',
    short_name: 'CPF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10747',
    name: 'Walker&Dunlop',
    short_name: 'WD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10748',
    name: 'Universal Insurance',
    short_name: 'UVE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10749',
    name: 'Customers Bancorp',
    short_name: 'CUBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10750',
    name: 'First NBC Bank',
    short_name: 'FNBCQ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10751',
    name: 'Great Western Bancorp Inc',
    short_name: 'GWB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10752',
    name: 'Enova International Inc',
    short_name: 'ENVA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10824',
    name: 'Repligen',
    short_name: 'RGEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10825',
    name: 'SurModics',
    short_name: 'SRDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10827',
    name: 'Meridian',
    short_name: 'VIVO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10828',
    name: 'MiMedx',
    short_name: 'MDXG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10829',
    name: 'Inogen Inc',
    short_name: 'INGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10830',
    name: 'Lannett',
    short_name: 'LCI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10831',
    name: 'Healthequity Inc',
    short_name: 'HQY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10832',
    name: 'Diplomat Pharmacy',
    short_name: 'DPLO_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10833',
    name: 'Quorum Health',
    short_name: 'QHC_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10887',
    name: 'Aceto',
    short_name: 'ACETQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10888',
    name: 'Multi-Color',
    short_name: 'LABL_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10889',
    name: 'Navigant',
    short_name: 'NCI_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10890',
    name: 'Celadon',
    short_name: 'CGIP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10891',
    name: 'AAR',
    short_name: 'AIR',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10892',
    name: 'SPX Corp',
    short_name: 'SPXC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10893',
    name: 'AZZ',
    short_name: 'AZZ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10894',
    name: 'Watts Water Technologies',
    short_name: 'WTS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10895',
    name: 'Unifirst',
    short_name: 'UNF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10896',
    name: 'Trex',
    short_name: 'TREX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10897',
    name: 'Tennant',
    short_name: 'TNC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10898',
    name: 'Viad',
    short_name: 'VVI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10899',
    name: 'WageWorks',
    short_name: 'WAGE_old',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10900',
    name: 'Proto Labs',
    short_name: 'PRLB',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10901',
    name: 'Veritiv Cor',
    short_name: 'VRTV',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10902',
    name: 'SPX FLOW Inc',
    short_name: 'FLOW',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10986',
    name: 'Cray',
    short_name: 'CRAY_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10987',
    name: 'Super Micro Computer',
    short_name: 'SMCI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10988',
    name: 'Monotype',
    short_name: 'TYPE_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10989',
    name: 'CMTSU Liquidation',
    short_name: 'CBRI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '10990',
    name: 'CTS Corp',
    short_name: 'CTS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '10991',
    name: 'Fabrinet',
    short_name: 'FN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '11072',
    name: 'Tredegar',
    short_name: 'TG',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '11073',
    name: 'Boise Cascad Llc',
    short_name: 'BCC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '11074',
    name: 'Rayonier Advanced Materials',
    short_name: 'RYAM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '11075',
    name: 'Timkensteel Corp',
    short_name: 'TMST',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12473',
    name: 'China Mobile DRC',
    short_name: 'CHL',
    country: 'united-states',
    sector: 'Communication Services',
    exch: '',
    ccy: ''
  },
  {
    id: '12474',
    name: 'TAL Education',
    short_name: 'TAL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12475',
    name: '58Com Inc Adr',
    short_name: 'WUBA',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12476',
    name: 'China Petrol & Chemical ADR',
    short_name: 'SNP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12477',
    name: 'ZTO Express Cayman',
    short_name: 'ZTO',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12478',
    name: 'HUYA',
    short_name: 'HUYA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12479',
    name: 'Tencent Music Entertainment Group',
    short_name: 'TME',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12498',
    name: 'ABB ADR',
    short_name: 'ABB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12499',
    name: 'CRH ADR',
    short_name: 'CRH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12500',
    name: 'ENI ADR',
    short_name: 'E',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12501',
    name: 'Rio Tinto ADR',
    short_name: 'RIO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12502',
    name: 'Nokia ADR',
    short_name: 'NOK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12503',
    name: 'BHP Billiton Ltd ADR',
    short_name: 'BHP',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12504',
    name: 'Anheuser Busch ADR',
    short_name: 'BUD',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12505',
    name: 'SAP ADR',
    short_name: 'SAP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12506',
    name: 'Telefonica ADR',
    short_name: 'TEF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12507',
    name: 'Santander ADR',
    short_name: 'SAN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12508',
    name: 'Unilever NV ADR',
    short_name: 'UN',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12509',
    name: 'Tenaris ADR',
    short_name: 'TS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12510',
    name: 'Westpac Banking ADR',
    short_name: 'WBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12511',
    name: 'Koninklijke Philips ADR',
    short_name: 'PHG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12512',
    name: 'Ambev SA',
    short_name: 'ABEV',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17240',
    name: 'NTT Docomo ADR',
    short_name: 'DCMYY',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '17241',
    name: 'BT ADR',
    short_name: 'BT_old',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17242',
    name: 'Sasol ADR',
    short_name: 'SSL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17243',
    name: 'Sanofi ADR',
    short_name: 'SNY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17244',
    name: 'POSCO',
    short_name: 'PKX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17245',
    name: 'Deutsche Bank AG',
    short_name: 'DB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17246',
    name: 'ArcelorMittal ADR',
    short_name: 'MT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17247',
    name: 'Telecom Italia ADR',
    short_name: 'TI_old',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17248',
    name: 'Unilever ADR',
    short_name: 'UL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17249',
    name: 'YPF Sociedad Anonima',
    short_name: 'YPF',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17250',
    name: 'Thomson Reuters',
    short_name: 'TRI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17251',
    name: 'Telkom Indonesia B ADR',
    short_name: 'TLK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17252',
    name: 'Enbridge',
    short_name: 'ENB',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17253',
    name: 'Manulife Financial',
    short_name: 'MFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17254',
    name: 'RBC',
    short_name: 'RY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17255',
    name: 'MTS ADR',
    short_name: 'MBT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17403',
    name: 'Seabridge Gold',
    short_name: 'SA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17404',
    name: 'Sibanye Gold ADR',
    short_name: 'SBSW',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17434',
    name: 'Chesapeake Lodging',
    short_name: 'CHSP_old',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17435',
    name: 'Universal Health RI',
    short_name: 'UHT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17436',
    name: 'Urstadt Biddle Properties',
    short_name: 'UBA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17437',
    name: 'USANA Health Sciences',
    short_name: 'USNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17438',
    name: 'Whitestone',
    short_name: 'WSR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17439',
    name: 'LeMaitre Vascular',
    short_name: 'LMAT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17440',
    name: 'Cedar Realty',
    short_name: 'CDR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17441',
    name: 'Wabash National',
    short_name: 'WNC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17442',
    name: 'Ferro',
    short_name: 'FOE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17443',
    name: 'NeoGenomics',
    short_name: 'NEO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17444',
    name: 'Siriuspoint',
    short_name: 'SPNT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17445',
    name: 'Armada Hflr Pr',
    short_name: 'AHH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17446',
    name: 'Evertec Inc',
    short_name: 'EVTC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17447',
    name: 'Re Max Holding',
    short_name: 'RMAX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17448',
    name: 'National Bank Holdings',
    short_name: 'NBHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17449',
    name: 'William Lyon Homes',
    short_name: 'WLH_old',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17450',
    name: 'Control4 Co',
    short_name: 'CTRL_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17451',
    name: 'Marcus & Millichap',
    short_name: 'MMI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17452',
    name: 'Par Pacific Holdings',
    short_name: 'PARR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17453',
    name: 'Care Com In',
    short_name: 'CRCM_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17454',
    name: 'New Media Investment',
    short_name: 'NEWM_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17455',
    name: 'Century Communities',
    short_name: 'CCS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17456',
    name: 'Boot Barn Holdings',
    short_name: 'BOOT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17457',
    name: 'Shake Shack Inc',
    short_name: 'SHAK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17458',
    name: 'Easterly Government Properties',
    short_name: 'DEA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17459',
    name: 'Franklin Financial Network Inc',
    short_name: 'FSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17460',
    name: 'Independence Realty Trust Inc',
    short_name: 'IRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17461',
    name: 'Ring Energy Inc',
    short_name: 'REI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17462',
    name: 'National Storage Affiliates Trust',
    short_name: 'NSA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17463',
    name: 'Community Healthcare Trust Inc',
    short_name: 'CHCT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17464',
    name: 'Global Net Lease',
    short_name: 'GNL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17465',
    name: 'Lantheus Holdings Inc',
    short_name: 'LNTH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17466',
    name: 'GMS Inc',
    short_name: 'GMS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17467',
    name: 'Tactile Systems',
    short_name: 'TCMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17468',
    name: 'Innovative Industrial Properties',
    short_name: 'IIPR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17469',
    name: 'Varex Imaging',
    short_name: 'VREX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17470',
    name: 'C&J Energy',
    short_name: 'CJ_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17471',
    name: 'ProPetro',
    short_name: 'PUMP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17472',
    name: 'Granite Point Mortgage',
    short_name: 'GPMT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17473',
    name: 'Consol Energy',
    short_name: 'CEIX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17474',
    name: 'Arlo Technologies',
    short_name: 'ARLO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17475',
    name: 'Livent',
    short_name: 'LTHM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17476',
    name: 'Garrett Motion',
    short_name: 'GTX',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '17477',
    name: 'Arcosa',
    short_name: 'ACA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '17478',
    name: 'Kontoor Brands',
    short_name: 'KTB',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18033',
    name: 'Freds',
    short_name: 'FREDQ',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '18034',
    name: 'HFF',
    short_name: 'HF_old',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18572',
    name: 'GATX',
    short_name: 'GATX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18573',
    name: 'Matador',
    short_name: 'MTDR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18574',
    name: 'Wyndham Hotels',
    short_name: 'WH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18575',
    name: 'Globus Medical',
    short_name: 'GMED',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18576',
    name: 'Valvoline',
    short_name: 'VVV',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18577',
    name: 'Janus Henderson',
    short_name: 'JHG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18578',
    name: 'Cars.com',
    short_name: 'CARS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18579',
    name: 'JBG SMITH Properties',
    short_name: 'JBGS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18580',
    name: 'Delphi Tech',
    short_name: 'DLPH',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18581',
    name: 'nVent Electric',
    short_name: 'NVT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18582',
    name: 'Resideo Tech',
    short_name: 'REZI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '18583',
    name: 'Equitrans Midstream',
    short_name: 'ETRN',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '56534',
    name: 'Nio A ADR',
    short_name: 'NIO',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '62944',
    name: 'Aluminum China ADR',
    short_name: 'ACH',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '62945',
    name: 'Constellium Nv',
    short_name: 'CSTM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '62946',
    name: 'Vedanta Ltd',
    short_name: 'VEDL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '62947',
    name: 'Peabody Energy',
    short_name: 'BTU',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '62948',
    name: 'Contura Energy',
    short_name: 'CTRA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '62949',
    name: 'Nexa Resources',
    short_name: 'NEXA',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '70631',
    name: 'Fomento Economico Mexicano',
    short_name: 'FMX',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '70812',
    name: 'Itau Unibanco',
    short_name: 'ITUB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '70813',
    name: 'Banco Santander Brasil ADR',
    short_name: 'BSBR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '99915',
    name: 'Natixis',
    short_name: 'CNAT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'Paris',
    ccy: 'EUR'
  },
  {
    id: '104095',
    name: 'Raiffeisen Centrobank',
    short_name: 'TATGD',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'Istanbul',
    ccy: 'TRY'
  },
  {
    id: '115104',
    name: 'Knoll',
    short_name: 'KNL',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '115105',
    name: 'Lubys',
    short_name: 'LUB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '115106',
    name: 'Aegon ADR',
    short_name: 'AEG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '115107',
    name: 'AVX',
    short_name: 'AVX_old',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '115108',
    name: 'CBIZ',
    short_name: 'CBZ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '115109',
    name: 'Culp',
    short_name: 'CULP',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '115110',
    name: 'ATA',
    short_name: 'AACG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '115111',
    name: 'VBI Vaccines',
    short_name: 'VBIV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '115112',
    name: 'Psychemedics',
    short_name: 'PMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118882',
    name: 'Franchise Group',
    short_name: 'FRG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118883',
    name: 'Noble Midstream',
    short_name: 'NBLX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118884',
    name: 'Conduent',
    short_name: 'CNDT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118885',
    name: 'Oasis Midstream Partners',
    short_name: 'OMP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118886',
    name: 'GrowGeneration',
    short_name: 'GRWG',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118887',
    name: 'Hoth Therapeutics',
    short_name: 'HOTH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118888',
    name: 'Happiness Biotech',
    short_name: 'HAPP',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118889',
    name: 'Ecmoho',
    short_name: 'MOHO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118890',
    name: 'Lmp Auto',
    short_name: 'LMPX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118891',
    name: 'Yayyo',
    short_name: 'YAYO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '118892',
    name: 'Ehang',
    short_name: 'EH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118893',
    name: 'Molecular Data',
    short_name: 'MKD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '118894',
    name: 'Lizhi',
    short_name: 'LIZI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120567',
    name: 'Assembly Biosciences',
    short_name: 'ASMB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120568',
    name: 'Ardelyx Inc',
    short_name: 'ARDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120569',
    name: 'Affimed NV',
    short_name: 'AFMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120570',
    name: 'ADMA Biologics Inc',
    short_name: 'ADMA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120571',
    name: 'XBiotech Inc',
    short_name: 'XBIT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120572',
    name: 'Chiasma Inc',
    short_name: 'CHMA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120573',
    name: 'Axsome Therapeutics Inc',
    short_name: 'AXSM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120574',
    name: 'Protagonist Therapeutics',
    short_name: 'PTGX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120575',
    name: 'Scholar Rock',
    short_name: 'SRRK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120576',
    name: 'MeiraGTx',
    short_name: 'MGTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120577',
    name: 'Principia Biopharma',
    short_name: 'PRNB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120578',
    name: 'Y mAbs Therapeutics',
    short_name: 'YMAB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120579',
    name: 'Arvinas',
    short_name: 'ARVN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120580',
    name: 'Gritstone Oncology',
    short_name: 'GRTS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120581',
    name: 'Kodiak Sciences',
    short_name: 'KOD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120582',
    name: 'Guardant Health',
    short_name: 'GH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120583',
    name: 'RVL Pharmaceuticals',
    short_name: 'OSMT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120584',
    name: 'NGM Biopharma',
    short_name: 'NGM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120585',
    name: 'Allogene Therapeutics',
    short_name: 'ALLO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120586',
    name: 'Twist Bioscience',
    short_name: 'TWST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120587',
    name: 'Axonics Modulation Technologies',
    short_name: 'AXNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120588',
    name: 'Orchard',
    short_name: 'ORTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120589',
    name: 'Moderna',
    short_name: 'MRNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120590',
    name: 'Gossamer Bio',
    short_name: 'GOSS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120591',
    name: 'Alector',
    short_name: 'ALEC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120592',
    name: 'Precision BioSciences',
    short_name: 'DTIL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120593',
    name: 'Turning Point',
    short_name: 'TPTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120594',
    name: 'Prevail Therapeutics',
    short_name: 'PRVL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120595',
    name: 'Atreca',
    short_name: 'BCEL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120596',
    name: 'Akero Therapeutics',
    short_name: 'AKRO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120597',
    name: 'Stoke Therapeutics',
    short_name: 'STOK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120598',
    name: 'Personalis',
    short_name: 'PSNL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120599',
    name: 'BridgeBio Pharma',
    short_name: 'BBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120600',
    name: 'Adaptive Biotechnologies',
    short_name: 'ADPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120601',
    name: 'Karuna Therapeutics',
    short_name: 'KRTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120602',
    name: 'Castle Biosciences',
    short_name: 'CSTL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '120603',
    name: 'Nuveen PA MVF',
    short_name: 'NPN_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE Amex',
    ccy: 'USD'
  },
  {
    id: '121280',
    name: 'Cincinnati Bancorp',
    short_name: 'CNNB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121285',
    name: 'CleanSpark',
    short_name: 'CLSK',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121286',
    name: 'Fangdd Network',
    short_name: 'DUO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121287',
    name: '36Kr Holdings',
    short_name: 'KRKR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121288',
    name: 'Sitime Corp',
    short_name: 'SITM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121289',
    name: 'Canaan',
    short_name: 'CAN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121290',
    name: 'Sprout Social',
    short_name: 'SPT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121291',
    name: 'Cerence',
    short_name: 'CRNC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121292',
    name: 'SWK Holdings',
    short_name: 'SWKH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121293',
    name: 'Investcorp Credit Management BDC',
    short_name: 'ICMB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121294',
    name: 'Moxian',
    short_name: 'MOXC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121295',
    name: 'Futu',
    short_name: 'FUTU',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121296',
    name: 'Elys Game Technology',
    short_name: 'ELYS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121297',
    name: 'Q And K Intl',
    short_name: 'QK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121298',
    name: 'Xp',
    short_name: 'XP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121299',
    name: 'DraftKings',
    short_name: 'DKNG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121300',
    name: 'Vodafone Group ADR',
    short_name: 'VOD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121521',
    name: '89bio',
    short_name: 'ETNB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121522',
    name: 'Abeona Therapeutics',
    short_name: 'ABEO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121523',
    name: 'Acasti Pharma',
    short_name: 'ACST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121524',
    name: 'Accelerate Diagnostics',
    short_name: 'AXDX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121525',
    name: 'Adamis Pharmaceuticals Corporation',
    short_name: 'ADMP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121526',
    name: 'Adial Pharma',
    short_name: 'ADIL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121527',
    name: 'Advaxis',
    short_name: 'ADXS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121528',
    name: 'Aadi Bioscience',
    short_name: 'AADI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121529',
    name: 'Aesthetic Medical Intl',
    short_name: 'AIH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121530',
    name: 'Aethlon Medical Inc',
    short_name: 'AEMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121531',
    name: 'Aevi Genomic Medicine',
    short_name: 'GNMX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121532',
    name: 'Afya',
    short_name: 'AFYA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121533',
    name: 'Agile Thrpe',
    short_name: 'AGRX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121534',
    name: 'Aileron Therapeutics',
    short_name: 'ALRN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121535',
    name: 'Akari Therapeutics',
    short_name: 'AKTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121536',
    name: 'MyMD Pharmaceuticals',
    short_name: 'MYMD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121537',
    name: 'Arcturus Therapeutics Holdings Inc',
    short_name: 'ARCT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121538',
    name: 'Aldeyra The',
    short_name: 'ALDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121539',
    name: 'Allena Pharma',
    short_name: 'ALNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121540',
    name: 'Alterity Therapeutics',
    short_name: 'ATHE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121541',
    name: 'Altimmune',
    short_name: 'ALT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121542',
    name: 'Anavex Life Sciences',
    short_name: 'AVXL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121543',
    name: 'Chemomab Therapeutics DRC',
    short_name: 'CMMB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121544',
    name: 'Antares',
    short_name: 'ATRS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121545',
    name: 'Apollo Endosurgery',
    short_name: 'APEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121546',
    name: 'Apollo Medical',
    short_name: 'AMEH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121547',
    name: 'Applied Genetic',
    short_name: 'AGTC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121548',
    name: 'Applied Therapeutics',
    short_name: 'APLT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121549',
    name: 'Aprea Thera',
    short_name: 'APRE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121550',
    name: 'Aptevo Therapeutics',
    short_name: 'APVO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121551',
    name: 'Aptorum A',
    short_name: 'APM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121552',
    name: 'Aptose Biosciences',
    short_name: 'APTO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121553',
    name: 'Apyx Medical',
    short_name: 'APYX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121554',
    name: 'AquaBounty Tech',
    short_name: 'AQB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121555',
    name: 'Aquinox Pha',
    short_name: 'NLTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121556',
    name: 'Arcadia Biosciences',
    short_name: 'RKDA',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121557',
    name: 'Aridis Pharma',
    short_name: 'ARDS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121558',
    name: 'X4 Pharmaceuticals',
    short_name: 'XFOR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121559',
    name: 'Protara Therapeutics',
    short_name: 'TARA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121560',
    name: 'Artelo Biosciences',
    short_name: 'ARTL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121561',
    name: 'Aslan Pharma ADR',
    short_name: 'ASLN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121562',
    name: 'Atossa Genetics',
    short_name: 'ATOS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121563',
    name: 'Altamira Therapeutics',
    short_name: 'CYTO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121564',
    name: 'Avalon Globocare',
    short_name: 'AVCO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121565',
    name: 'Avenue Therapeutics',
    short_name: 'ATXI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121566',
    name: 'Avinger',
    short_name: 'AVGR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121567',
    name: 'Axcella Health',
    short_name: 'AXLA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121568',
    name: 'Axogen Inc',
    short_name: 'AXGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121569',
    name: 'Aytu BioScience',
    short_name: 'AYTU',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121570',
    name: 'First Wave BioPharma',
    short_name: 'FWBI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121571',
    name: 'Baudax Bio',
    short_name: 'BXRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121572',
    name: 'Bellerophon Therapeutics Inc',
    short_name: 'BLPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121573',
    name: 'Bellicum Pharmaceuticals Inc',
    short_name: 'BLCM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121574',
    name: 'BELLUS Health Inc.',
    short_name: 'BLU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121575',
    name: 'Benitec Biopharma ADR',
    short_name: 'BNTC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121576',
    name: 'BeyondSpring',
    short_name: 'BYSI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121577',
    name: 'Bicycle Therapeutics',
    short_name: 'BCYC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121578',
    name: 'Bio Path',
    short_name: 'BPTH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121579',
    name: 'Biocardia',
    short_name: 'BCDA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121580',
    name: 'Biofrontera ADR',
    short_name: 'BFRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121581',
    name: 'BioLife Solutions',
    short_name: 'BLFS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121582',
    name: 'Biomerica',
    short_name: 'BMRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121583',
    name: 'Bionano Genomics',
    short_name: 'BNGO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121584',
    name: 'Biondvax Pharma ADR',
    short_name: 'BVXV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121585',
    name: 'BioNTech',
    short_name: 'BNTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121586',
    name: 'Biosig Tech',
    short_name: 'BSGM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121587',
    name: 'BioXcel Therapeutics',
    short_name: 'BTAI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121588',
    name: 'Brainstorm Cell Therapeutics',
    short_name: 'BCLI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121589',
    name: 'Brainsway',
    short_name: 'BWAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121590',
    name: 'Brighthouse Financial',
    short_name: 'BHF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121591',
    name: 'Brp Gr',
    short_name: 'BRP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121592',
    name: 'Cabaletta Bio',
    short_name: 'CABA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121593',
    name: 'Caladrius Biosciences',
    short_name: 'CLBS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121594',
    name: 'Calithera Biosciences Inc',
    short_name: 'CALA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121595',
    name: 'Calyxt',
    short_name: 'CLXT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121596',
    name: 'Vyant Bio',
    short_name: 'VYNT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121597',
    name: 'Capricor Therapeutics',
    short_name: 'CAPR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121598',
    name: 'Caredx Inc',
    short_name: 'CDNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121599',
    name: 'Casi Pharma',
    short_name: 'CASI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121600',
    name: 'Cassava Sciences',
    short_name: 'SAVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121601',
    name: 'Astria Therapeutics',
    short_name: 'ATXS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121602',
    name: 'Catalyst Biosciences',
    short_name: 'CBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121603',
    name: 'Ontrak',
    short_name: 'OTRK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121604',
    name: 'Celcuity',
    short_name: 'CELC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121605',
    name: 'Cellect Biotech',
    short_name: 'APOP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121606',
    name: 'Cellectar Biosciences',
    short_name: 'CLRB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121607',
    name: 'Cellular Bi',
    short_name: 'CBMG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121608',
    name: 'Celyad SA',
    short_name: 'CYAD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121609',
    name: 'Centogene',
    short_name: 'CNTG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121610',
    name: 'Avalo Therapeutics',
    short_name: 'AVTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121611',
    name: 'Champions Oncology',
    short_name: 'CSBR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121612',
    name: 'Change Healthcare',
    short_name: 'CHNG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121613',
    name: 'Check Cap Ltd',
    short_name: 'CHEK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121614',
    name: 'Checkpoint Therapeutics',
    short_name: 'CKPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121615',
    name: 'Chembio',
    short_name: 'CEMI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121616',
    name: 'Nuwellis',
    short_name: 'NUWE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121617',
    name: 'Chimerix',
    short_name: 'CMRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121618',
    name: 'China SXT Pharma',
    short_name: 'SXTC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121619',
    name: 'Cidara Therapeutics Inc',
    short_name: 'CDTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121620',
    name: 'Citius Pharma',
    short_name: 'CTXR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121621',
    name: 'Clearside Biomedical',
    short_name: 'CLSD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121622',
    name: 'Cns Pharma',
    short_name: 'CNSP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121623',
    name: 'Co-Diagnostics',
    short_name: 'CODX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121624',
    name: 'Cocrystal Pharma',
    short_name: 'COCP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121625',
    name: 'CohBar',
    short_name: 'CWBR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121626',
    name: 'Collplant ADR',
    short_name: 'CLGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121627',
    name: 'Histogen Inc',
    short_name: 'HSTO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121628',
    name: 'ConforMIS Inc',
    short_name: 'CFMS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121629',
    name: 'Constellation Pharmaceuticals',
    short_name: 'CNST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121630',
    name: 'ContraFect Corp',
    short_name: 'CFRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121631',
    name: 'Hepion Pharmaceuticals',
    short_name: 'HEPA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121632',
    name: 'Cortexyme',
    short_name: 'CRTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121633',
    name: 'Corvus Pharmaceuticals',
    short_name: 'CRVS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121634',
    name: 'Cue Biopharma',
    short_name: 'CUE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121635',
    name: 'Cyclerion Therapeutics',
    short_name: 'CYCN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121636',
    name: 'Cytosorbents Crp',
    short_name: 'CTSO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121637',
    name: 'Dare Bioscience',
    short_name: 'DARE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121638',
    name: 'DermTech',
    short_name: 'DMTK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121639',
    name: 'DiaMedica Therapeutics',
    short_name: 'DMAC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121640',
    name: 'Diffusion Pharma',
    short_name: 'DFFN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121641',
    name: 'Dyadic',
    short_name: 'DYAI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121642',
    name: 'Ekso Bionics',
    short_name: 'EKSO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121643',
    name: 'Electrocore',
    short_name: 'ECOR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121644',
    name: 'ENDRA Life Sciences',
    short_name: 'NDRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121645',
    name: 'Enlivex',
    short_name: 'ENLV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121646',
    name: 'Enochian Biosciences',
    short_name: 'ENOB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121647',
    name: 'Entasis Therapeutics',
    short_name: 'ETTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121648',
    name: 'Entera Bio',
    short_name: 'ENTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121649',
    name: 'Equillium',
    short_name: 'EQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121650',
    name: 'Erytech Pharma ADR',
    short_name: 'ERYP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121651',
    name: 'ESSA Pharma',
    short_name: 'EPIX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121652',
    name: 'Establishment Labs',
    short_name: 'ESTA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121653',
    name: 'Eton Pharmaceuticals',
    short_name: 'ETON',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121654',
    name: 'Evelo Biosciences',
    short_name: 'EVLO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121655',
    name: 'Evofem Biosciences',
    short_name: 'EVFM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121656',
    name: 'Evogene',
    short_name: 'EVGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121657',
    name: 'Evoke Pharma',
    short_name: 'EVOK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121658',
    name: 'Exagen',
    short_name: 'XGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121659',
    name: 'Exicure',
    short_name: 'XCUR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121660',
    name: 'Kiora Pharmaceuticals',
    short_name: 'EYEG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121661',
    name: 'Eyenovia',
    short_name: 'EYEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121662',
    name: 'Fennec Pharma',
    short_name: 'FENC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121663',
    name: 'Alerislife',
    short_name: 'FVE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121664',
    name: 'Salarius Pharmaceuticals',
    short_name: 'SLRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121665',
    name: 'Forward Pharma A S',
    short_name: 'FWP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121666',
    name: 'Frequency Thera',
    short_name: 'FREQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121667',
    name: 'FSD Pharma B',
    short_name: 'HUGE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121668',
    name: 'Fulcrum Therapeutics',
    short_name: 'FULC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121669',
    name: 'Fulgent Genetics',
    short_name: 'FLGT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121670',
    name: 'Galectin',
    short_name: 'GALT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121671',
    name: 'Galera',
    short_name: 'GRTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121672',
    name: 'Galmed Pharma',
    short_name: 'GLMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121673',
    name: 'Gamida Cell',
    short_name: 'GMDA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121674',
    name: 'Neurobo Pharmaceuticals',
    short_name: 'NRBO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121675',
    name: 'Genfit',
    short_name: 'GNFT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121676',
    name: 'Genocea Bio',
    short_name: 'GNCA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121677',
    name: 'Genprex',
    short_name: 'GNPX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121678',
    name: 'Guardion Health',
    short_name: 'GHSI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121679',
    name: 'enVVeno Medical',
    short_name: 'HJLI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121680',
    name: 'Harpoon Therapeutics',
    short_name: 'HARP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121681',
    name: 'Harrow Health',
    short_name: 'HROW',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121682',
    name: 'Heat Biologics',
    short_name: 'HTBX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121683',
    name: 'Helius Medical A',
    short_name: 'HSDT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121684',
    name: 'Heron Therapeuti',
    short_name: 'HRTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121685',
    name: 'Ocugen',
    short_name: 'OCGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121686',
    name: 'Hookipa Pharma',
    short_name: 'HOOK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121687',
    name: 'HTG Molecular Diagnostics',
    short_name: 'HTGM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121688',
    name: 'I Mab',
    short_name: 'IMAB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121689',
    name: 'Ideaya Biosciences',
    short_name: 'IDYA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121690',
    name: 'IGM Biosciences',
    short_name: 'IGMS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121691',
    name: 'Imac',
    short_name: 'IMAC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121692',
    name: 'Immunic',
    short_name: 'IMUX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121693',
    name: 'Immuron',
    short_name: 'IMRN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121694',
    name: 'Immutep ADR',
    short_name: 'IMMP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121695',
    name: 'Imv Inc',
    short_name: 'IMV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121696',
    name: 'InflaRx',
    short_name: 'IFRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121697',
    name: 'InMode',
    short_name: 'INMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121698',
    name: 'INmune Bio',
    short_name: 'INMB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121699',
    name: 'Innate Pharma',
    short_name: 'IPHA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121700',
    name: 'Insulet',
    short_name: 'PODD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121701',
    name: 'Indaptus',
    short_name: 'INDP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121702',
    name: 'Intersect ENT Inc',
    short_name: 'XENT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121703',
    name: 'InVivo Therapeutics',
    short_name: 'NVIV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121704',
    name: 'Iradimed Co',
    short_name: 'IRMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121705',
    name: 'iRhythm Tech',
    short_name: 'IRTC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121706',
    name: 'Itamar Medical',
    short_name: 'ITMR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121707',
    name: 'Iterum Therapeutics',
    short_name: 'ITRM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121708',
    name: 'Anixa Biosciences',
    short_name: 'ANIX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121709',
    name: 'IVERIC bio',
    short_name: 'ISEE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121710',
    name: 'Jaguar Health',
    short_name: 'JAGX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121711',
    name: 'Jounce Therapeutics',
    short_name: 'JNCE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121712',
    name: 'Kaleido Biosciences',
    short_name: 'KLDO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121713',
    name: 'Kalvista Pharma',
    short_name: 'KALV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121714',
    name: 'Kamada',
    short_name: 'KMDA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121715',
    name: 'KemPharm Inc',
    short_name: 'KMPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121716',
    name: 'Kezar Life',
    short_name: 'KZR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121717',
    name: 'Kindred Bioscncs',
    short_name: 'KIN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121718',
    name: 'Purple Biotech ADR',
    short_name: 'PPBT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121719',
    name: 'Krystal Biotech',
    short_name: 'KRYS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121720',
    name: 'La Jolla Pharma',
    short_name: 'LJPC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121721',
    name: 'Leap Therapeutics',
    short_name: 'LPTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121722',
    name: 'Liminal BioSciences Inc',
    short_name: 'LMNL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121723',
    name: 'Liquidia Technologies',
    short_name: 'LQDA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121724',
    name: 'LogicBio Therapeutics',
    short_name: 'LOGC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121725',
    name: 'Madrigal Pharma',
    short_name: 'MDGL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121726',
    name: 'Marinus Pharma',
    short_name: 'MRNS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121727',
    name: 'Marker Therapeutics',
    short_name: 'MRKR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121728',
    name: 'Medigus ADR',
    short_name: 'MDGS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121729',
    name: 'Mediwound',
    short_name: 'MDWD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121730',
    name: 'MEI Pharma',
    short_name: 'MEIP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121731',
    name: 'Vyne Therapeutics',
    short_name: 'VYNE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121732',
    name: 'Mereo BioPharma ADR',
    short_name: 'MREO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121733',
    name: 'Merrimack Pharma',
    short_name: 'MACK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121734',
    name: 'Mersana Therapeutics',
    short_name: 'MRSN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121735',
    name: 'Merus',
    short_name: 'MRUS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121736',
    name: 'Mesoblast',
    short_name: 'MESO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121737',
    name: 'Microbot Medical',
    short_name: 'MBOT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121738',
    name: 'Midatech Pharma ADR',
    short_name: 'MTP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121739',
    name: 'Milestone Pharmaceuticals',
    short_name: 'MIST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121740',
    name: 'Tempest Therapeutics',
    short_name: 'TPST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121741',
    name: 'Viridian Therapeutics',
    short_name: 'VRDN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121742',
    name: 'Mirum Pharmaceuticals',
    short_name: 'MIRM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121743',
    name: 'Molecular Templates',
    short_name: 'MTEM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121744',
    name: 'Moleculin Biotech',
    short_name: 'MBRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121745',
    name: 'Monopar Therapeutics',
    short_name: 'MNPR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121746',
    name: 'Morphic Holding',
    short_name: 'MORF',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121747',
    name: 'Motus GI Holdings',
    short_name: 'MOTS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121748',
    name: 'Clearpoint Neuro',
    short_name: 'CLPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121749',
    name: 'Mustang Bio',
    short_name: 'MBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121750',
    name: 'Nabriva Therapeutics',
    short_name: 'NBRV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121751',
    name: 'NanoVibronix',
    short_name: 'NAOV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121752',
    name: 'Nanthealth',
    short_name: 'NH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121753',
    name: 'NantKwest Inc',
    short_name: 'IBRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121754',
    name: 'Natera Inc',
    short_name: 'NTRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121755',
    name: 'National General Holdings Corp',
    short_name: 'NGHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121756',
    name: 'Nemaura Medical',
    short_name: 'NMRD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121757',
    name: 'Neon Therapeutics',
    short_name: 'NTGN_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121758',
    name: 'Neos Therapeutics Inc',
    short_name: 'NEOS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121759',
    name: 'Neovasc Inc',
    short_name: 'NVCN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121760',
    name: 'Nephros',
    short_name: 'NEPH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121761',
    name: 'NextCure',
    short_name: 'NXTC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121762',
    name: 'Novan',
    short_name: 'NOVN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121763',
    name: 'Eledon Pharmaceuticals',
    short_name: 'ELDN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121764',
    name: 'NuCana',
    short_name: 'NCNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121765',
    name: 'Obalon Therapeutics',
    short_name: 'OBLN_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121766',
    name: 'ObsEva',
    short_name: 'OBSV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121767',
    name: 'Odonate Therapeutics',
    short_name: 'ODT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121768',
    name: 'NeuBase Therapeutics',
    short_name: 'NBSE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121769',
    name: 'Onconova Therapeutics',
    short_name: 'ONTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121770',
    name: 'OncoSec Medical',
    short_name: 'ONCS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121771',
    name: 'OpGen',
    short_name: 'OPGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121772',
    name: 'Opiant Pharma',
    short_name: 'OPNT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121773',
    name: 'Oramed',
    short_name: 'ORMP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121774',
    name: 'Organogenesis',
    short_name: 'ORGO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121775',
    name: 'Organovo Holdings',
    short_name: 'ONVO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121776',
    name: 'Orgenesis',
    short_name: 'ORGS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121777',
    name: 'Orthopediatrics',
    short_name: 'KIDS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121778',
    name: 'Otonomy Inc',
    short_name: 'OTIC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121779',
    name: 'OUTLOOK THERAPEUTICS',
    short_name: 'OTLK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121780',
    name: 'Ovid Therapeutics',
    short_name: 'OVID',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121781',
    name: 'Oxford Immunotec Global',
    short_name: 'OXFD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121782',
    name: 'Oyster Point Pharma',
    short_name: 'OYST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121783',
    name: 'PAVmed',
    short_name: 'PAVM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121784',
    name: 'PDS Biotech',
    short_name: 'PDSB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121785',
    name: 'Avid Bioservices',
    short_name: 'CDMO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121786',
    name: 'PhaseBio Pharmaceuticals',
    short_name: 'PHAS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121787',
    name: 'Phathom Pharma',
    short_name: 'PHAT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121788',
    name: 'Phio Pharma',
    short_name: 'PHIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121789',
    name: 'Pieris Pharmaceuticals Inc',
    short_name: 'PIRS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121790',
    name: 'Pluristem',
    short_name: 'PSTI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121791',
    name: 'PLx Pharma',
    short_name: 'PLXP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121792',
    name: 'Precipio',
    short_name: 'PRPO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121793',
    name: 'Predictive Oncology',
    short_name: 'POAI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121794',
    name: 'Progyny',
    short_name: 'PGNY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121795',
    name: 'ProPhase Labs',
    short_name: 'PRPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121796',
    name: 'Provention Bio',
    short_name: 'PRVB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121797',
    name: 'Pulmatrix',
    short_name: 'PULM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121798',
    name: 'Pulse Biosciences',
    short_name: 'PLSE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121799',
    name: 'Quidel',
    short_name: 'QDEL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121800',
    name: 'Quotient Ltd',
    short_name: 'QTNT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121801',
    name: 'R1 RCM',
    short_name: 'RCM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121802',
    name: 'RadNet',
    short_name: 'RDNT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121803',
    name: 'RAPT Therapeutics',
    short_name: 'RAPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121804',
    name: 'Societal CDMO',
    short_name: 'REPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121805',
    name: 'Redhill ADR',
    short_name: 'RDHL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121806',
    name: 'Regulus Therapeutics',
    short_name: 'RGLS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121807',
    name: 'Relmada Therapeutics',
    short_name: 'RLMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121808',
    name: 'Repro Med Systems',
    short_name: 'KRMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121809',
    name: 'Rewalk Robotics',
    short_name: 'RWLK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121810',
    name: 'Ocuphire Pharma',
    short_name: 'REXN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '121811',
    name: 'Qualigen Therapeutics',
    short_name: 'QLGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121812',
    name: 'Rockwell Medical',
    short_name: 'RMTI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121813',
    name: 'RTI Surgical',
    short_name: 'RTIX_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121814',
    name: 'Satsuma Pharma',
    short_name: 'STSA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121815',
    name: 'Scpharmaceuticals',
    short_name: 'SCPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121816',
    name: 'Scynexis Inc',
    short_name: 'SCYX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121817',
    name: 'SeaSpine Holdings Corp',
    short_name: 'SPNE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121818',
    name: 'Second Sight Medical Products',
    short_name: 'EYES',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121819',
    name: 'Selecta Bio',
    short_name: 'SELB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121820',
    name: 'Palisade Bio',
    short_name: 'PALI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121821',
    name: 'Sensus Health',
    short_name: 'SRTS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121822',
    name: 'Sesen Bio',
    short_name: 'SESN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121823',
    name: 'Shockwave Medical',
    short_name: 'SWAV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121824',
    name: 'Si-Bone',
    short_name: 'SIBN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121825',
    name: 'Sientra Inc',
    short_name: 'SIEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121826',
    name: 'Sierra Oncology',
    short_name: 'SRRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121827',
    name: 'Silk Road Medical',
    short_name: 'SILK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121828',
    name: 'Sinovac Biotech',
    short_name: 'SVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121829',
    name: 'SINTX Technologies',
    short_name: 'SINT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121830',
    name: 'SmileDirectClub',
    short_name: 'SDC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121831',
    name: 'So-Young',
    short_name: 'SY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121832',
    name: 'Sol Gel Tech',
    short_name: 'SLGL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121833',
    name: 'Soleno Therapeutics',
    short_name: 'SLNO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121834',
    name: 'Soligenix Inc',
    short_name: 'SNGX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121835',
    name: 'Soliton',
    short_name: 'SOLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121836',
    name: 'Sophiris Bio Inc',
    short_name: 'SPHS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '121837',
    name: 'Sorrento Therape',
    short_name: 'SRNE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121838',
    name: 'Spero Therapeutics',
    short_name: 'SPRO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121839',
    name: 'FStar Therapeutics',
    short_name: 'FSTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121840',
    name: 'SpringWorks',
    short_name: 'SWTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121841',
    name: 'STAAR Surgical',
    short_name: 'STAA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121842',
    name: 'Stealth Bio',
    short_name: 'MITO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121843',
    name: 'Edesa Biotech',
    short_name: 'EDSA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121844',
    name: 'Stemline',
    short_name: 'STML_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121845',
    name: 'Summit Therapeutics PLC',
    short_name: 'SMMT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121846',
    name: 'Viracta Therapeutics',
    short_name: 'VIRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121847',
    name: 'Surgery Partners Inc',
    short_name: 'SGRY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121848',
    name: 'Sutro Biopharma',
    short_name: 'STRO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121849',
    name: 'Syndax Pharmaceuticals',
    short_name: 'SNDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121850',
    name: 'T2 Biosystms Inc',
    short_name: 'TTOO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121851',
    name: 'Taiwan Liposome ADR',
    short_name: 'TLC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121852',
    name: 'Tandem Diabetes Care',
    short_name: 'TNDM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121853',
    name: 'Tcr2 Therapeutics',
    short_name: 'TCRR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121854',
    name: 'Tela Bio',
    short_name: 'TELA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121855',
    name: 'Tetraphase',
    short_name: 'TTPH_old',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121856',
    name: 'Tff Pharma',
    short_name: 'TFFP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121857',
    name: 'TG',
    short_name: 'TGTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121858',
    name: 'The Joint Corp',
    short_name: 'JYNT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121859',
    name: 'Scisparc',
    short_name: 'SPRCY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '121860',
    name: 'Theratechnologies',
    short_name: 'THTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121861',
    name: 'Titan Medical',
    short_name: 'TMDI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121862',
    name: 'Titan Pharma',
    short_name: 'TTNP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121863',
    name: 'Tiziana Life ADR',
    short_name: 'TLSA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121864',
    name: 'Tonix Pharma',
    short_name: 'TNXP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121865',
    name: 'TRACON Pharma',
    short_name: 'TCON',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121866',
    name: 'TransMedics',
    short_name: 'TMDX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121867',
    name: 'Trevena Inc',
    short_name: 'TRVN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121868',
    name: 'Trevi Therapeutics',
    short_name: 'TRVI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121869',
    name: 'Trillium Therapeutics',
    short_name: 'TRIL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121870',
    name: 'Trinity',
    short_name: 'TRIB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121871',
    name: 'Cardiff Oncology',
    short_name: 'CRDF',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121872',
    name: 'Tyme Tech',
    short_name: 'TYME',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121873',
    name: 'Urovant Sciences',
    short_name: 'UROV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121874',
    name: 'Utah Medical',
    short_name: 'UTMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121875',
    name: 'Vaccinex',
    short_name: 'VCNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121876',
    name: 'Vascular Biogenics',
    short_name: 'VBLT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121877',
    name: 'Venus Concept Inc',
    short_name: 'VERO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121878',
    name: 'Vericity',
    short_name: 'VERY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121879',
    name: 'Aspira Womens Health',
    short_name: 'AWH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121880',
    name: 'Verona Pharma ADR',
    short_name: 'VRNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121881',
    name: 'Verrica Pharmaceuticals',
    short_name: 'VRCA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121882',
    name: 'Aravive',
    short_name: 'ARAV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121883',
    name: 'Brickell Biotech',
    short_name: 'BBI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121884',
    name: 'Viela Bio',
    short_name: 'VIE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121885',
    name: 'Viemed Healthcare',
    short_name: 'VMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121886',
    name: 'ViewRay Inc',
    short_name: 'VRAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121887',
    name: 'Viking Therapeutics Inc',
    short_name: 'VKTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121888',
    name: 'Vir Biotech',
    short_name: 'VIR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121889',
    name: 'Viveve Medical',
    short_name: 'VIVE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121890',
    name: 'Vivus',
    short_name: 'VVUSQ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '121891',
    name: 'vTv Therapeutics Inc',
    short_name: 'VTVT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121892',
    name: 'Wright Medical',
    short_name: 'WMGI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121893',
    name: 'XTL Biopharma',
    short_name: 'XTLB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121894',
    name: 'Xenetic Biosciences',
    short_name: 'XBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121895',
    name: 'XOMA',
    short_name: 'XOMA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121896',
    name: 'Zealand Pharma ADR',
    short_name: 'ZEAL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121897',
    name: 'Alaunos Therapeutics',
    short_name: 'ZIOP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121898',
    name: 'Zosano Pharma',
    short_name: 'ZSAN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121899',
    name: 'Zynerba Pharma',
    short_name: 'ZYNE',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121900',
    name: 'Zynex',
    short_name: 'ZYXI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121901',
    name: 'Silvercorp Metals',
    short_name: 'SVM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '121907',
    name: 'Anpac Bio Med',
    short_name: 'ANPC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121908',
    name: 'Black Diamond',
    short_name: 'BDTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121913',
    name: 'China Index Holdings',
    short_name: 'CIH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121914',
    name: 'IDT',
    short_name: 'IDT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '121915',
    name: '1Life Healthcare',
    short_name: 'ONEM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121916',
    name: 'Arcutis',
    short_name: 'ARQT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121917',
    name: 'Reynolds',
    short_name: 'REYN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121918',
    name: 'Quantum',
    short_name: 'QMCO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121943',
    name: 'Beam',
    short_name: 'BEAM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121944',
    name: 'Ppd',
    short_name: 'PPD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121945',
    name: 'Schrodinger',
    short_name: 'SDGR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121948',
    name: 'Onewater Marine',
    short_name: 'ONEW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121952',
    name: 'Professional',
    short_name: 'PFHD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121960',
    name: 'Huize',
    short_name: 'HUIZ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121961',
    name: 'Revolution Med',
    short_name: 'RVMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121962',
    name: 'Duos Tech',
    short_name: 'DUOT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121963',
    name: 'Trxade',
    short_name: 'MEDS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121964',
    name: 'TFI Intl',
    short_name: 'TFII',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '121971',
    name: 'Akazoo',
    short_name: 'SONG_old',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '121980',
    name: 'Zhongchao',
    short_name: 'ZCMD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9837758',
    name: 'SJW',
    short_name: 'SJW',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9837774',
    name: 'California BanCorp',
    short_name: 'CALB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9837789',
    name: 'Imara',
    short_name: 'IMRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9837790',
    name: 'Passage Bio',
    short_name: 'PASG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9868319',
    name: 'Esports Entertainment',
    short_name: 'GMBL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9957689',
    name: 'BIT Mining',
    short_name: 'BTCM',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957690',
    name: 'A10 Network',
    short_name: 'ATEN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957691',
    name: 'Acushnet Holdings',
    short_name: 'GOLF',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957692',
    name: 'ADS',
    short_name: 'WMS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957693',
    name: 'ADT',
    short_name: 'ADT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957694',
    name: 'Advanced Disposal',
    short_name: 'ADSW',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957695',
    name: 'Alcon',
    short_name: 'ALC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957696',
    name: 'Algonquin Power',
    short_name: 'AQN',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957697',
    name: 'Alteryx',
    short_name: 'AYX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957698',
    name: 'Altice USA',
    short_name: 'ATUS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957699',
    name: 'AMC Entertainment',
    short_name: 'AMC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957700',
    name: 'American Renal Associates',
    short_name: 'ARA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957701',
    name: 'Americold Realty',
    short_name: 'COLD',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957702',
    name: 'Amira Nature Foods',
    short_name: 'ANFIF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '9957703',
    name: 'Amplify Energy',
    short_name: 'AMPY',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957704',
    name: 'AMTD IDEA',
    short_name: 'HKIB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957705',
    name: 'Embotelladora Andina B ADR',
    short_name: 'AKOb',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957706',
    name: 'Annovis Bio',
    short_name: 'ANVS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957707',
    name: 'Aphria',
    short_name: 'APHA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9957708',
    name: 'Apollo Global Management A',
    short_name: 'APO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957709',
    name: 'Arcus Biosciences',
    short_name: 'RCUS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957710',
    name: 'Ardagh Group',
    short_name: 'ARD',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957711',
    name: 'Ardmore Shpng',
    short_name: 'ASC',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957712',
    name: 'Ares Commercial RE',
    short_name: 'ACRE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957713',
    name: 'Argan',
    short_name: 'AGX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957714',
    name: 'Armstrong Flooring',
    short_name: 'AFI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957715',
    name: 'Artisan Partners AM',
    short_name: 'APAM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957716',
    name: 'Aspen Aerogels Inc',
    short_name: 'ASPN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957717',
    name: 'AssetMark',
    short_name: 'AMK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957718',
    name: 'Associated Capital Group Inc',
    short_name: 'AC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957719',
    name: 'At Home Group',
    short_name: 'HOME',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957720',
    name: 'Atento SA',
    short_name: 'ATTO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957721',
    name: 'Athene Holding',
    short_name: 'ATH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957722',
    name: 'Atkore Intl',
    short_name: 'ATKR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957723',
    name: 'Aurora Cannabis',
    short_name: 'ACB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9957724',
    name: 'Avalara',
    short_name: 'AVLR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957725',
    name: 'Avangrid Inc',
    short_name: 'AGR',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957726',
    name: 'Avantor',
    short_name: 'AVTR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957727',
    name: 'Avaya',
    short_name: 'AVYA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957728',
    name: 'Axa Equitable',
    short_name: 'EQH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957729',
    name: 'Azul',
    short_name: 'AZUL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957730',
    name: 'Azure Power Global',
    short_name: 'AZRE',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957731',
    name: 'B Riley Principal A',
    short_name: 'ALTG',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957732',
    name: 'Babcock & Wilcox Enterprises',
    short_name: 'BW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957733',
    name: 'Banco Bradesco',
    short_name: 'BBD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957734',
    name: 'Banco Bradesco S/A ADR',
    short_name: 'BBDO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957735',
    name: 'Banco De Chile',
    short_name: 'BCH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957736',
    name: 'Bank of N.T. Butterfield Son',
    short_name: 'NTB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957737',
    name: 'Barings BDC',
    short_name: 'BBDC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957738',
    name: 'BBVA Banco Frances ADR',
    short_name: 'BBAR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957739',
    name: 'Bluegreen Vacations Holding',
    short_name: 'BVH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957740',
    name: 'BEST',
    short_name: 'BEST',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957741',
    name: 'Biglari A',
    short_name: 'BHa',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957742',
    name: 'Biohaven Pharma',
    short_name: 'BHVN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957743',
    name: 'BJs Wholesale Club',
    short_name: 'BJ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957744',
    name: 'Bloom Energy',
    short_name: 'BE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957745',
    name: 'Blue Apron',
    short_name: 'APRN',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957746',
    name: 'Bluegreen Vacations',
    short_name: 'BXG',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957747',
    name: 'Braemar Hotel',
    short_name: 'BHR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957748',
    name: 'Brasilagro Adr',
    short_name: 'LND',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957749',
    name: 'Brigham Minerals',
    short_name: 'MNRL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957750',
    name: 'Bright Scholar A',
    short_name: 'BEDU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957751',
    name: 'BrightView Holdings',
    short_name: 'BV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957752',
    name: 'Byline Bancorp',
    short_name: 'BY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957753',
    name: 'Cactus',
    short_name: 'WHD',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957754',
    name: 'Cadence Bancorp',
    short_name: 'CADE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957755',
    name: 'CAE Inc.',
    short_name: 'CAE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957756',
    name: 'California Resources',
    short_name: 'CRC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957757',
    name: 'Camping World Holdings',
    short_name: 'CWH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957758',
    name: 'Canada Goose',
    short_name: 'GOOS',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957759',
    name: 'Canadian National Railway',
    short_name: 'CNI',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957760',
    name: 'Canadian Pacific Railway',
    short_name: 'CP',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957761',
    name: 'Cango',
    short_name: 'CANG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957762',
    name: 'Cannae',
    short_name: 'CNNE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957763',
    name: 'Canopy Growth',
    short_name: 'CGC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9957764',
    name: 'Carvana',
    short_name: 'CVNA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957765',
    name: 'Casper Sleep',
    short_name: 'CSPR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957766',
    name: 'Castlight Health',
    short_name: 'CSLT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957767',
    name: 'Catchmark Timber',
    short_name: 'CTT',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957768',
    name: 'Cementos Pacasmayo ADR',
    short_name: 'CPAC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957769',
    name: 'CEMIG Pref ADR',
    short_name: 'CIG',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957770',
    name: 'Centrais Eletricas Brasileiras ADR',
    short_name: 'EBRb',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957771',
    name: 'Central Puerto',
    short_name: 'CEPU',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957772',
    name: 'Ceridian HCM',
    short_name: 'CDAY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957773',
    name: 'Channeladvsr Co',
    short_name: 'ECOM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957774',
    name: 'Chaparral Energy A',
    short_name: 'CHAPQ',
    country: 'united-states',
    sector: 'Energy',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '9957775',
    name: 'Charah Solutions',
    short_name: 'CHRA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957776',
    name: 'Cheetah Mobile Inc',
    short_name: 'CMCM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957777',
    name: 'Chegg Inc',
    short_name: 'CHGG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957778',
    name: 'Cherry Hill Mortgage',
    short_name: 'CHMI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957779',
    name: 'Chewy',
    short_name: 'CHWY',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957780',
    name: 'China Online ADR',
    short_name: 'COE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957781',
    name: 'Sos Ltd',
    short_name: 'SOS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957782',
    name: 'China Southern Airlines ADR',
    short_name: 'ZNH',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957783',
    name: 'City Office',
    short_name: 'CIO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957784',
    name: 'Civeo',
    short_name: 'CVEO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957785',
    name: 'Clearway Energy C',
    short_name: 'CWEN',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957786',
    name: 'Clipper Realty',
    short_name: 'CLPR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957787',
    name: 'Cloudera',
    short_name: 'CLDR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957788',
    name: 'CNFinance',
    short_name: 'CNF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957789',
    name: 'CNH Industrial NV',
    short_name: 'CNHI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957790',
    name: 'Utz Brands',
    short_name: 'UTZ',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957791',
    name: 'Brightspire Capital',
    short_name: 'BRSP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957792',
    name: 'Compass Diversified',
    short_name: 'CODI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957793',
    name: 'Container Store',
    short_name: 'TCS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957794',
    name: 'CooTek Cayman',
    short_name: 'CTK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957795',
    name: 'COPEL Pref ADR',
    short_name: 'ELP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957796',
    name: 'Corenergy Infras',
    short_name: 'CORR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957797',
    name: 'CorePoint Lodging',
    short_name: 'CPLG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957798',
    name: 'Corporacion America Airports',
    short_name: 'CAAP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957799',
    name: 'Covia',
    short_name: 'CVIAQ_old',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957800',
    name: 'Crescent Point Energy',
    short_name: 'CPG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957801',
    name: 'Cross Timbers Royalty Trust',
    short_name: 'CRT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957802',
    name: 'Curo Group',
    short_name: 'CURO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957803',
    name: 'Cushman & Wakefield',
    short_name: 'CWK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957804',
    name: 'Despegar.com',
    short_name: 'DESP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957805',
    name: 'Diamond S Shipping',
    short_name: 'DSSI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957806',
    name: 'Dorian LPG Ltd',
    short_name: 'LPG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957807',
    name: 'Drive Shack',
    short_name: 'DS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957808',
    name: 'Dynatrace Holdings',
    short_name: 'DT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957809',
    name: 'Earthstone Energy',
    short_name: 'ESTE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957810',
    name: 'Eastman Kodak',
    short_name: 'KODK',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957811',
    name: 'Elanco Animal Health',
    short_name: 'ELAN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957812',
    name: 'Elastic',
    short_name: 'ESTC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957813',
    name: 'Elevate Credit',
    short_name: 'ELVT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957814',
    name: 'ELF Beauty',
    short_name: 'ELF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957815',
    name: 'Ellington Financial',
    short_name: 'EFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957816',
    name: 'Ellington Residential Mortgage',
    short_name: 'EARN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957817',
    name: 'Emerald Expositions',
    short_name: 'EEX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957818',
    name: 'Empire State Realty',
    short_name: 'ESRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9957819',
    name: 'Endava',
    short_name: 'DAVA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958889',
    name: 'Enel Americas ADR',
    short_name: 'ENIA',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958890',
    name: 'Enel Chile ADR',
    short_name: 'ENIC',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958891',
    name: 'Envista Holdings',
    short_name: 'NVST',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958892',
    name: 'Eros STX Global',
    short_name: 'ESGC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958893',
    name: 'Essent Group Ltd',
    short_name: 'ESNT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958894',
    name: 'Essential Properties',
    short_name: 'EPRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958895',
    name: 'Euronav',
    short_name: 'EURN',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958896',
    name: 'Evolent Health Inc',
    short_name: 'EVH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958897',
    name: 'Evoqua Water',
    short_name: 'AQUA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958898',
    name: 'Global Blue Group Holding',
    short_name: 'GB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958899',
    name: 'Farfetch A',
    short_name: 'FTCH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958900',
    name: 'Farmland Partners',
    short_name: 'FPI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958901',
    name: 'Fastly',
    short_name: 'FSLY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958902',
    name: 'FB Financial',
    short_name: 'FBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958903',
    name: 'Federal Agricultural Mortgage A',
    short_name: 'AGMa',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958904',
    name: 'Ferrari NV',
    short_name: 'RACE',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958905',
    name: 'FGL',
    short_name: 'FG_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958906',
    name: 'Stellantis NV',
    short_name: 'STLA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958907',
    name: 'Fitbit Inc',
    short_name: 'FIT',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958908',
    name: 'Five Point',
    short_name: 'FPH',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958909',
    name: 'Fiverr International',
    short_name: 'FVRR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958910',
    name: 'Floor & Decor',
    short_name: 'FND',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958911',
    name: 'Fortis Inc',
    short_name: 'FTS',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958912',
    name: 'Fortress Transport Infrast',
    short_name: 'FTAI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958913',
    name: 'Forum Energy',
    short_name: 'FET',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958914',
    name: 'Foundation Building',
    short_name: 'FBM',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958915',
    name: 'Four Seasons Education',
    short_name: 'FEDU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958916',
    name: 'Franklin Covey',
    short_name: 'FC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958917',
    name: 'Front Yard Residential',
    short_name: 'RESI',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958918',
    name: 'FS KKR Capital',
    short_name: 'FSK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958919',
    name: 'FTS International',
    short_name: 'FTSI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958920',
    name: 'GasLog',
    short_name: 'GLOG',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958921',
    name: 'Gates Industrial Corp',
    short_name: 'GTES',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958922',
    name: 'GeoPark Ltd',
    short_name: 'GPRK',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958923',
    name: 'Gerdau ADR',
    short_name: 'GGB',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958924',
    name: 'Gfl Environmental',
    short_name: 'GFL',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958925',
    name: 'Glaukos Corp',
    short_name: 'GKOS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958926',
    name: 'Global Medical',
    short_name: 'GMRE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958927',
    name: 'Globant SA',
    short_name: 'GLOB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958928',
    name: 'Gol Linhas Aereas ADR',
    short_name: 'GOL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958929',
    name: 'Goldman Sachs BDC Closed End Fund',
    short_name: 'GSBD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958930',
    name: 'Gorman-Rupp',
    short_name: 'GRC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958931',
    name: 'Velodyne Lidar',
    short_name: 'VLDR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9958932',
    name: 'GrafTech',
    short_name: 'EAF',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958933',
    name: 'Graham',
    short_name: 'GHM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958934',
    name: 'Aenza',
    short_name: 'AENZ',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958935',
    name: 'Great Ajax Corp',
    short_name: 'AJX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958936',
    name: 'GreenTree Hospitality',
    short_name: 'GHG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958937',
    name: 'Grupo Supervielle',
    short_name: 'SUPV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958938',
    name: 'Gaotu Techedu DRC',
    short_name: 'GOTU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958939',
    name: 'GTT Com',
    short_name: 'GTTN',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '9958940',
    name: 'Hamilton Beach A',
    short_name: 'HBB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958941',
    name: 'Hannon Armstrong Sustainable',
    short_name: 'HASI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958942',
    name: 'Innovate',
    short_name: 'HCHC',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958943',
    name: 'Herc Holdings',
    short_name: 'HRI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958944',
    name: 'Hercules Capital',
    short_name: 'HTGC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958945',
    name: 'Heritage Insurance',
    short_name: 'HRTG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958946',
    name: 'Hexo',
    short_name: 'HEXO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9958947',
    name: 'Hilton Grand Vacations',
    short_name: 'HGV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958948',
    name: 'Horizon Global Corp',
    short_name: 'HZN',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958949',
    name: 'Houlihan Lokey Inc',
    short_name: 'HLI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958950',
    name: 'Zepp Health',
    short_name: 'ZEPP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958951',
    name: 'HubSpot Inc',
    short_name: 'HUBS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958952',
    name: 'Hudson',
    short_name: 'HUD',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958953',
    name: 'Lument Finance Trust',
    short_name: 'LFT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958954',
    name: 'Hyster-Yale Materials Handling',
    short_name: 'HY',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958955',
    name: 'IAA',
    short_name: 'IAA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958956',
    name: 'ICL Israel Chemicals',
    short_name: 'ICL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958957',
    name: 'Imax',
    short_name: 'IMAX',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958958',
    name: 'Independence Contract Drilling',
    short_name: 'ICD',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958959',
    name: 'Inspire Medical Systems',
    short_name: 'INSP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958960',
    name: 'Intelsat Sa',
    short_name: 'INTEQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '9958961',
    name: 'Intercorp Financial Services',
    short_name: 'IFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958962',
    name: 'Expro Holdings NV',
    short_name: 'FI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958963',
    name: 'International Seaways',
    short_name: 'INSW',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958964',
    name: 'InVitae Corp',
    short_name: 'NVTA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958965',
    name: 'Invitation Homes',
    short_name: 'INVH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958966',
    name: 'Itau CorpBanca ADR',
    short_name: 'ITCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958967',
    name: 'J Alexanders Holdings Inc',
    short_name: 'JAX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958968',
    name: 'J.Jill',
    short_name: 'JILL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958969',
    name: 'James Hardie Industries ADR',
    short_name: 'JHX',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958970',
    name: 'Jeld-Wen Holding',
    short_name: 'JELD',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958971',
    name: 'Jernigan Capital Inc',
    short_name: 'JCAP',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958972',
    name: 'Jianpu Tech',
    short_name: 'JT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958973',
    name: 'Jumia Tech',
    short_name: 'JMIA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958974',
    name: 'Jupai Holdings Ltd',
    short_name: 'JP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958975',
    name: 'Just Energy',
    short_name: 'JE',
    country: 'united-states',
    sector: 'Utilities',
    exch: '',
    ccy: ''
  },
  {
    id: '9958976',
    name: 'Stride',
    short_name: 'LRN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958977',
    name: 'Kadmons',
    short_name: 'KDMN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9958978',
    name: 'Nextier Oilfield Solutions',
    short_name: 'NEX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958979',
    name: 'Kenon Holdings',
    short_name: 'KEN',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958980',
    name: 'Kirkland Lake Gold',
    short_name: 'KL',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958981',
    name: 'KKR Real Estate',
    short_name: 'KREF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958982',
    name: 'KT',
    short_name: 'KT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958983',
    name: 'Ladder Capital A',
    short_name: 'LADR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958984',
    name: 'LAIX',
    short_name: 'LAIX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958985',
    name: 'LATAM Airlines ADR',
    short_name: 'LTMAQ',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '9958986',
    name: 'Lee Enterprises',
    short_name: 'LEE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9958987',
    name: 'PARTS iD',
    short_name: 'ID',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958988',
    name: 'Leju Holdings',
    short_name: 'LEJU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958989',
    name: 'Levi Strauss A',
    short_name: 'LEVI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958990',
    name: 'LG Display',
    short_name: 'LPL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958991',
    name: 'Liberty Oilfield',
    short_name: 'LBRT',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958992',
    name: 'LightInTheBox',
    short_name: 'LITB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958993',
    name: 'Linde PLC',
    short_name: 'LIN',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958994',
    name: 'Line ADR',
    short_name: 'LN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958995',
    name: 'Linx',
    short_name: 'LINX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958996',
    name: 'Lions Gate',
    short_name: 'LGFb',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958997',
    name: 'Lithium Americas',
    short_name: 'LAC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958998',
    name: 'Loma Negra ADR',
    short_name: 'LOMA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9958999',
    name: 'Luxfer',
    short_name: 'LXFR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959000',
    name: 'Macquarie Infrastructure Co',
    short_name: 'MIC',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959001',
    name: 'Magnolia Oil',
    short_name: 'MGY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959002',
    name: 'Main Street Capital',
    short_name: 'MAIN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959003',
    name: 'Manchester United',
    short_name: 'MANU',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959004',
    name: 'Masonite Int',
    short_name: 'DOOR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959005',
    name: 'Maxar Tech',
    short_name: 'MAXR',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959006',
    name: 'Mayville Engineering',
    short_name: 'MEC',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959007',
    name: 'Medallia',
    short_name: 'MDLA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959008',
    name: 'Medley Management Inc',
    short_name: 'MDLM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '9959009',
    name: 'Bm Technologies',
    short_name: 'BMTX',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959010',
    name: 'Mesa Royalty Trust',
    short_name: 'MTR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959011',
    name: 'Mesabi Trust',
    short_name: 'MSB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959012',
    name: 'Metropolitan Bank',
    short_name: 'MCB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959013',
    name: 'MGM Growth Properties',
    short_name: 'MGP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959014',
    name: 'Micro Focus ADR',
    short_name: 'MFGP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959015',
    name: 'Mix Telemats',
    short_name: 'MIXT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959016',
    name: 'Model N Inc',
    short_name: 'MODN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959017',
    name: 'Moelis & Co',
    short_name: 'MC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959018',
    name: 'MOGU',
    short_name: 'MOGU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959019',
    name: 'Montage Resources',
    short_name: 'MR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959020',
    name: 'MSG Networks Inc',
    short_name: 'MSGN',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959021',
    name: 'MVC Capital',
    short_name: 'MVC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959022',
    name: 'Myovant Sciences',
    short_name: 'MYOV',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959023',
    name: 'Natural Grocers Vitamin',
    short_name: 'NGVC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959024',
    name: 'Navigator Holdings',
    short_name: 'NVGS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959025',
    name: 'Navios Maritime',
    short_name: 'NNA',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959026',
    name: 'Custom Truck One Source',
    short_name: 'CTOS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959027',
    name: 'Nevro Corp',
    short_name: 'NVRO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959028',
    name: 'New Frontier A',
    short_name: 'NFH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959029',
    name: 'New Home Co',
    short_name: 'NWHM',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9959030',
    name: 'New Mountain Finance',
    short_name: 'NMFC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9959031',
    name: 'New Senior Investment Group',
    short_name: 'SNR',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960991',
    name: 'Nexpoint',
    short_name: 'NREF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960992',
    name: 'Nexpoint Residential Trust Inc',
    short_name: 'NXRT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960993',
    name: 'Nine Energy',
    short_name: 'NINE',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960994',
    name: 'Nomad Foods',
    short_name: 'NOMD',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960995',
    name: 'Norbord',
    short_name: 'OSB',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960996',
    name: 'Nordic American Offshore',
    short_name: 'PSV',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960997',
    name: 'Nutrien',
    short_name: 'NTR',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960998',
    name: 'Brightsphere Investment Group',
    short_name: 'BSIG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9960999',
    name: 'On Deck Capital Inc',
    short_name: 'ONDK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961000',
    name: 'Ranpak Holdings',
    short_name: 'PACK',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961001',
    name: 'OneMain Holdings',
    short_name: 'OMF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961002',
    name: 'Ooma Inc',
    short_name: 'OOMA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961003',
    name: 'Orchid Isla',
    short_name: 'ORC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961004',
    name: 'Orion Engineered Carbons',
    short_name: 'OEC',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961005',
    name: 'Otis Worldwide',
    short_name: 'OTIS',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961006',
    name: 'Owl Rock Capital',
    short_name: 'ORCC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961007',
    name: 'Pacific Coast Oil Trust',
    short_name: 'ROYTL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '9961008',
    name: 'Pagerduty',
    short_name: 'PD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961009',
    name: 'PagSeguro Digital',
    short_name: 'PAGS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961010',
    name: 'Park Hotels & Resorts',
    short_name: 'PK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961011',
    name: 'Parsons',
    short_name: 'PSN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961012',
    name: 'Party City Holdco Inc',
    short_name: 'PRTY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961013',
    name: 'Paycom Soft',
    short_name: 'PAYC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961014',
    name: 'PennyMac Financial',
    short_name: 'PFSI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961015',
    name: 'Penumbra Inc',
    short_name: 'PEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961016',
    name: 'Performance Food Group Co',
    short_name: 'PFGC',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961017',
    name: 'Permianville Royalty',
    short_name: 'PVL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961018',
    name: 'Petroleo Brasileiro ADR Reptg 2 Pref',
    short_name: 'PBRa',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961019',
    name: 'Phoenix Tree',
    short_name: 'DNK',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961020',
    name: 'Phreesia',
    short_name: 'PHR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961021',
    name: 'Pinterest',
    short_name: 'PINS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961022',
    name: 'PJT Partners Inc',
    short_name: 'PJT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961023',
    name: 'Planet Fitness Inc',
    short_name: 'PLNT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961024',
    name: 'PlayAGS',
    short_name: 'AGS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961025',
    name: 'Plymouth Industrial',
    short_name: 'PLYM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961026',
    name: 'Postal Realty',
    short_name: 'PSTL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961027',
    name: 'FinVolution Group',
    short_name: 'FINV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961028',
    name: 'Ecovyst',
    short_name: 'ECVT',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961029',
    name: 'Preferred Apt. Communities',
    short_name: 'APTS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961030',
    name: 'Prosight',
    short_name: 'PROS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961031',
    name: 'Pure Storage Inc',
    short_name: 'PSTG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961032',
    name: 'Puxin',
    short_name: 'NEW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961033',
    name: 'Q2 Holdings',
    short_name: 'QTWO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961034',
    name: 'Qiagen',
    short_name: 'QGEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961035',
    name: 'QTS REIT',
    short_name: 'QTS',
    country: 'united-states',
    sector: 'Real Estate',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961036',
    name: 'Qudian Inc',
    short_name: 'QD',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961037',
    name: 'Quintana Energy Services',
    short_name: 'QES_old',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961038',
    name: 'Quotient Technology',
    short_name: 'QUOT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961039',
    name: 'RA Medical Systems',
    short_name: 'RMED',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961040',
    name: 'Rafael B',
    short_name: 'RFL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961041',
    name: 'Ranger Energy Services',
    short_name: 'RNGR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961042',
    name: 'Ready Capital',
    short_name: 'RC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961043',
    name: 'Red Lion Hotels',
    short_name: 'RLH',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961044',
    name: 'Regional Management',
    short_name: 'RM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961045',
    name: 'Renren',
    short_name: 'RENN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961046',
    name: 'Restaurant Brands Int',
    short_name: 'QSR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961047',
    name: 'Retail Value',
    short_name: 'RVI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961048',
    name: 'Rev Group',
    short_name: 'REVG',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961049',
    name: 'Revolve',
    short_name: 'RVLV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961050',
    name: 'Rexford Inl Rty',
    short_name: 'REXR',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961051',
    name: 'Zurn Water Solutions',
    short_name: 'RXN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961052',
    name: 'Ringcentral Inc',
    short_name: 'RNG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961053',
    name: 'Ritchie Bros Auctioneers',
    short_name: 'RBA',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961054',
    name: 'Magnite',
    short_name: 'MGNI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9961055',
    name: 'RYB Education',
    short_name: 'RYB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961056',
    name: 'Ryerson Holding',
    short_name: 'RYI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961057',
    name: 'Sabesp ADR',
    short_name: 'SBS',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961058',
    name: 'Sabine Royalty Trust',
    short_name: 'SBR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961059',
    name: 'Safehold',
    short_name: 'SAFE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961060',
    name: 'Sailpoint Tech',
    short_name: 'SAIL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961061',
    name: 'SandRidge Permian Trust',
    short_name: 'PER',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961062',
    name: 'Sandstorm Gold Ltd N',
    short_name: 'SAND',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961063',
    name: 'Santander Chile ADR',
    short_name: 'BSAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961064',
    name: 'Santander Consumer USA Holdings Inc',
    short_name: 'SC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961065',
    name: 'Santander Mexico B ADR',
    short_name: 'BSMX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961066',
    name: 'Saratoga Investment Corp',
    short_name: 'SAR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961067',
    name: 'Schneider National',
    short_name: 'SNDR',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961068',
    name: 'Eneti',
    short_name: 'NETI',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961069',
    name: 'Sculptor Capital',
    short_name: 'SCU',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961070',
    name: 'SEACOR Marine',
    short_name: 'SMHI',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961071',
    name: 'SeaWorld Entertainment',
    short_name: 'SEAS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961072',
    name: 'Select Energy Services',
    short_name: 'WTTR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961073',
    name: 'Seritage Growth Properties',
    short_name: 'SRG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961074',
    name: 'Shopify Inc',
    short_name: 'SHOP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961075',
    name: 'SilverBow',
    short_name: 'SBOW',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961076',
    name: 'Sinopec Shanghai Petrochemical ADR',
    short_name: 'SHI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961077',
    name: 'Siteone Landscape Supply',
    short_name: 'SITE',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961078',
    name: 'SK Telecom ADR',
    short_name: 'SKM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961079',
    name: 'Slack',
    short_name: 'WORK',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961080',
    name: 'Smartsheet',
    short_name: 'SMAR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961081',
    name: 'Soquimich B ADR',
    short_name: 'SQM',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961082',
    name: 'Solaris Oilfield',
    short_name: 'SOI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961083',
    name: 'SolarWinds Corp',
    short_name: 'SWI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961084',
    name: 'Fisker',
    short_name: 'FSR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961085',
    name: 'Spotify Tech',
    short_name: 'SPOT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961086',
    name: 'Block',
    short_name: 'SQ',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961087',
    name: 'Stellus Capital Investment',
    short_name: 'SCM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961088',
    name: 'Studio City',
    short_name: 'MSC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961089',
    name: 'Summit Materials Inc',
    short_name: 'SUM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961090',
    name: 'Sunlands Tech',
    short_name: 'STG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961091',
    name: 'Sunnova Energy',
    short_name: 'NOVA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961092',
    name: 'Suzano Papel ADR',
    short_name: 'SUZ',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961093',
    name: 'Talos Energy',
    short_name: 'TALO',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961094',
    name: 'Taro Pharma Industries',
    short_name: 'TARO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961095',
    name: 'Taylor Morn Home',
    short_name: 'TMHC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961096',
    name: 'Teekay',
    short_name: 'TK',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961097',
    name: 'Teekay Tankers',
    short_name: 'TNK',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961098',
    name: 'Tejon Ranch',
    short_name: 'TRC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961099',
    name: 'Teladoc Inc',
    short_name: 'TDOC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961100',
    name: 'Telecom Argentina ADR',
    short_name: 'TEO',
    country: 'united-states',
    sector: 'Communication Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961101',
    name: 'Telefonica Brasil ADR',
    short_name: 'VIV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961102',
    name: 'TELUS',
    short_name: 'TU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961103',
    name: 'Ternium ADR',
    short_name: 'TX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961104',
    name: 'Terreno',
    short_name: 'TRNO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961105',
    name: 'Texas Pacific Land Trust',
    short_name: 'TPL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961106',
    name: 'Textainer',
    short_name: 'TGH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961107',
    name: 'Thermon',
    short_name: 'THR',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961108',
    name: 'Tillys',
    short_name: 'TLYS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961109',
    name: 'TIM Participacoes',
    short_name: 'TIMB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961110',
    name: 'Townsquare Media LLC',
    short_name: 'TSQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961111',
    name: 'Accel Entertainment',
    short_name: 'ACEL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961112',
    name: 'TPG RE Finance',
    short_name: 'TRTX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961113',
    name: 'Sixth Street Specialty Lending',
    short_name: 'TSLX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961114',
    name: 'Trane Technologies',
    short_name: 'TT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961115',
    name: 'Transportadora Gas ADR',
    short_name: 'TGS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961116',
    name: 'TransUnion',
    short_name: 'TRU',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961117',
    name: 'Trinet Grou',
    short_name: 'TNET',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961118',
    name: 'Trinseo SA',
    short_name: 'TSE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961119',
    name: 'Tronox',
    short_name: 'TROX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961120',
    name: 'Tsakos Energy',
    short_name: 'TNP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961121',
    name: 'Tufin Software',
    short_name: 'TUFN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961122',
    name: 'Turkcell Iletisim Hizmetleri',
    short_name: 'TKC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961123',
    name: 'Turning Point Brands',
    short_name: 'TPB',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961124',
    name: 'Tutor Perini',
    short_name: 'TPC',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961125',
    name: 'Twilio',
    short_name: 'TWLO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961126',
    name: 'Twin River',
    short_name: 'TRWH',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961127',
    name: 'Uber Tech',
    short_name: 'UBER',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961128',
    name: 'Ultrapar Participacoes',
    short_name: 'UGP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961129',
    name: 'UMH Properties',
    short_name: 'UMH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961130',
    name: 'United Microelectronics',
    short_name: 'UMC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961131',
    name: 'United States Cellular',
    short_name: 'USM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961132',
    name: 'UNITIL',
    short_name: 'UTL',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961133',
    name: 'Univar Inc',
    short_name: 'UNVR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961134',
    name: 'Universal Technical Institute',
    short_name: 'UTI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961135',
    name: 'Urstadt Biddle',
    short_name: 'UBP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961136',
    name: 'US Foods',
    short_name: 'USFD',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961137',
    name: 'US Xpress',
    short_name: 'USX',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961138',
    name: 'Valhi',
    short_name: 'VHI',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961139',
    name: 'Vapotherm Inc',
    short_name: 'VAPO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961140',
    name: 'Vector',
    short_name: 'VGR',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961141',
    name: 'Vectrus Inc',
    short_name: 'VEC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961142',
    name: 'Velocity Fin',
    short_name: 'VEL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961143',
    name: 'Venator Materials',
    short_name: 'VNTR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961144',
    name: 'Veoneer',
    short_name: 'VNE',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961145',
    name: 'Vermilion Energy',
    short_name: 'VET',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961146',
    name: 'Verso',
    short_name: 'VRS',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961147',
    name: 'Vertiv Holdings Co',
    short_name: 'VRT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961148',
    name: 'VICI Properties',
    short_name: 'VICI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961149',
    name: 'Vince',
    short_name: 'VNCE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961150',
    name: 'Vishay Precision',
    short_name: 'VPG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961151',
    name: 'Vista Oil Gas',
    short_name: 'VIST',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961152',
    name: 'Vistra Energy',
    short_name: 'VST',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961153',
    name: 'Vivint Solar Inc',
    short_name: 'VSLR',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961154',
    name: 'VOC Energy Trust',
    short_name: 'VOC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961155',
    name: 'Vocera',
    short_name: 'VCRA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961156',
    name: 'Voxeljet Ag',
    short_name: 'VJET',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '9961157',
    name: 'Controladora Vuela ADR',
    short_name: 'VLRS',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961158',
    name: 'W&T Offshore',
    short_name: 'WTI',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961159',
    name: 'Warrior Met Coal',
    short_name: 'HCC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961160',
    name: 'Waste Connections',
    short_name: 'WCN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961161',
    name: 'Watsco B Inc',
    short_name: 'WSOb',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9961162',
    name: 'Weidai',
    short_name: 'WEI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963719',
    name: 'Weis Markets',
    short_name: 'WMK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963720',
    name: 'Western Asset Mortgage',
    short_name: 'WMC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963721',
    name: 'Westwood',
    short_name: 'WHG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963722',
    name: 'WideOpenWest',
    short_name: 'WOW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963723',
    name: 'WNS Holdings',
    short_name: 'WNS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963724',
    name: 'Woori Financial',
    short_name: 'WF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963725',
    name: 'Workiva Inc',
    short_name: 'WK',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963726',
    name: 'X Financial A',
    short_name: 'XYF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963727',
    name: 'Xinyuan RE',
    short_name: 'XIN',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963728',
    name: 'YETI',
    short_name: 'YETI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963729',
    name: 'Yext',
    short_name: 'YEXT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963730',
    name: 'Yirendai Ltd',
    short_name: 'YRD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963731',
    name: 'Youdao',
    short_name: 'DAO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963732',
    name: 'Yum China Holdings',
    short_name: 'YUMC',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963733',
    name: 'Zendesk Inc',
    short_name: 'ZEN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963734',
    name: 'Zuora',
    short_name: 'ZUO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9963735',
    name: 'Zymeworks',
    short_name: 'ZYME',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '9981948',
    name: 'WiMi Hologram Cloud',
    short_name: 'WIMI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10013216',
    name: 'Keros',
    short_name: 'KROS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '10016816',
    name: 'Zentalis Pharma',
    short_name: 'ZNTL',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595270',
    name: 'Carrier Global',
    short_name: 'CARR',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595271',
    name: 'Oric Pharma',
    short_name: 'ORIC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595272',
    name: 'Profound Medical',
    short_name: 'PROF',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595275',
    name: 'Equinox Gold',
    short_name: 'EQX',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595276',
    name: 'Delcath Systems',
    short_name: 'DCTH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595281',
    name: 'China Liberal Education',
    short_name: 'CLEU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595282',
    name: 'Gan',
    short_name: 'GAN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595283',
    name: 'Inari Med',
    short_name: 'NARI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595309',
    name: 'Delmar Bancorp',
    short_name: 'PTRS_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595310',
    name: 'Kingsoft Cloud',
    short_name: 'KC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595326',
    name: 'Immunovant',
    short_name: 'IMVT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595327',
    name: 'Adc Thera',
    short_name: 'ADCT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595328',
    name: 'Borr Drilling',
    short_name: 'BORR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595329',
    name: 'Howmet',
    short_name: 'HWM',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595330',
    name: 'Madison Square Garden Entertainment',
    short_name: 'MSGE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595332',
    name: 'Ayala Pharma',
    short_name: 'AYLA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595333',
    name: 'Lyra',
    short_name: 'LYRA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595334',
    name: 'Windtree Therapeutics',
    short_name: 'WINT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595357',
    name: 'Nuzee',
    short_name: 'NUZE',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595358',
    name: 'Warner Music',
    short_name: 'WMG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595359',
    name: 'Dada Nexus',
    short_name: 'DADA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595360',
    name: 'Vroom',
    short_name: 'VRM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595361',
    name: 'Nikola',
    short_name: 'NKLA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595425',
    name: 'VerifyMe',
    short_name: 'VRME',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595426',
    name: 'ZoomInfo',
    short_name: 'ZI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595586',
    name: 'Ucloudlink',
    short_name: 'UCL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595621',
    name: 'Agora',
    short_name: 'API',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595622',
    name: 'Akouos',
    short_name: 'AKUS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595623',
    name: 'Applied Molecular',
    short_name: 'AMTI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595624',
    name: 'Avidity Bio',
    short_name: 'RNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595625',
    name: 'Burning Rock',
    short_name: 'BNR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595626',
    name: 'Calliditas Therapeutics',
    short_name: 'CALT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595627',
    name: 'Ebang Intl',
    short_name: 'EBON',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595628',
    name: 'Forma',
    short_name: 'FMTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595629',
    name: 'Fusion Pharma',
    short_name: 'FUSN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595630',
    name: 'Generation Bio',
    short_name: 'GBIO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595631',
    name: 'Genetron',
    short_name: 'GTH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595632',
    name: 'Lantern Pharma',
    short_name: 'LTRN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595633',
    name: 'Legend Bio',
    short_name: 'LEGN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595634',
    name: 'Pliant',
    short_name: 'PLRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595635',
    name: 'PolyPid',
    short_name: 'PYPD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595636',
    name: 'Biora Therapeutics',
    short_name: 'PROG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595637',
    name: 'Repare',
    short_name: 'RPTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595638',
    name: 'Royalty Pharma',
    short_name: 'RPRX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595639',
    name: 'Vaxcyte',
    short_name: 'PCVX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595682',
    name: 'IEC',
    short_name: 'IEC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595683',
    name: 'Quhuo',
    short_name: 'QH',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595684',
    name: 'Skillful Craftsman',
    short_name: 'EDTK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595685',
    name: 'Dirtt Environmen',
    short_name: 'DRTT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595686',
    name: 'Blade Air Mobility',
    short_name: 'BLDE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595687',
    name: 'Bit Origin',
    short_name: 'PLIN',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595688',
    name: 'Research Solutions',
    short_name: 'RSSS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595689',
    name: 'Mediaco Holding',
    short_name: 'MDIA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595690',
    name: 'Muscle Maker',
    short_name: 'GRIL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595691',
    name: 'Paramount Global A',
    short_name: 'VIACA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595692',
    name: 'PAE',
    short_name: 'PAE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595693',
    name: 'Brilliant Acquisition',
    short_name: 'BRLI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595722',
    name: 'CrossFirst Bankshares',
    short_name: 'CFB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595723',
    name: 'Richmond Mutual Bancorporation',
    short_name: 'RMBI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595724',
    name: 'ChoiceOne Financial Services',
    short_name: 'COFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595725',
    name: 'First Seacoast Bancorp',
    short_name: 'FSEA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595726',
    name: 'Pioneer Bancorp',
    short_name: 'PBFS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595727',
    name: 'Crexendo',
    short_name: 'CXDO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595728',
    name: 'Intellicheck Mobilisa',
    short_name: 'IDN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595729',
    name: 'Accolade',
    short_name: 'ACCD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595730',
    name: 'Bluecity',
    short_name: 'BLCT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595731',
    name: 'Ncino',
    short_name: 'NCNO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595732',
    name: 'Jamf',
    short_name: 'JAMF',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595733',
    name: 'Vertex',
    short_name: 'VERX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595734',
    name: 'Wisekey International Holding AG',
    short_name: 'WKEY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595748',
    name: 'Advantage Solutions',
    short_name: 'ADV',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595749',
    name: 'POINT Biopharma Global',
    short_name: 'PNT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595750',
    name: 'indie Semiconductor',
    short_name: 'INDI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595751',
    name: 'Jasper Therapeutics',
    short_name: 'AMHC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595752',
    name: 'Avepoint',
    short_name: 'AVPT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595753',
    name: 'Ast Spacemobile',
    short_name: 'ASTS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595754',
    name: 'Curiositystream',
    short_name: 'CURI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595755',
    name: 'Silver Spike Acquisition',
    short_name: 'SSPK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595756',
    name: 'Helbiz',
    short_name: 'HLBZ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595757',
    name: 'Haymaker Acquisition',
    short_name: 'HYAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595758',
    name: 'AgileThought',
    short_name: 'AGIL',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595759',
    name: 'Stable Road Acquisition',
    short_name: 'SRAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595760',
    name: 'East Stone Acquisition',
    short_name: 'ESSC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595761',
    name: 'Shift Technologies,',
    short_name: 'SFT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595762',
    name: 'BTRS Holdings',
    short_name: 'BTRS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595763',
    name: 'Procaps',
    short_name: 'LATN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595764',
    name: 'Landcadia Holdings II',
    short_name: 'LCA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595765',
    name: 'Porch Group',
    short_name: 'PRCH',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595766',
    name: 'Crescent Capital BDC',
    short_name: 'CCAP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595767',
    name: 'Katapult',
    short_name: 'KPLT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595768',
    name: 'Nuvve Holding',
    short_name: 'NVVE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595769',
    name: 'Triterras',
    short_name: 'TRIT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595770',
    name: 'Ucommune International',
    short_name: 'UK',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595771',
    name: 'Tuscan Holdings',
    short_name: 'THCA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595772',
    name: 'Soc Telemed',
    short_name: 'TLMD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595773',
    name: 'Lion Group Holding',
    short_name: 'LGHL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595774',
    name: 'Bogota Financial',
    short_name: 'BSBK',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595775',
    name: 'UWM Holdings',
    short_name: 'UWMC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595776',
    name: 'AGBA Acquisition',
    short_name: 'AGBA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595777',
    name: 'Celularity',
    short_name: 'CELU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595778',
    name: 'Appharvest',
    short_name: 'APPH',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595779',
    name: 'Arrival Vault USA',
    short_name: 'ARVL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595780',
    name: 'CHP Merger',
    short_name: 'CHPM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595781',
    name: 'FLEX LNG',
    short_name: 'FLNG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595782',
    name: 'Lemonade',
    short_name: 'LMND',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595783',
    name: 'Natwest Group',
    short_name: 'NWG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595784',
    name: 'MultiPlan',
    short_name: 'MPLN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595785',
    name: 'Cloudflare',
    short_name: 'NET',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595786',
    name: 'Digital Media Solutions',
    short_name: 'DMS',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595787',
    name: 'Ping Identity Holding',
    short_name: 'PING',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595788',
    name: 'Hyliion Holdings',
    short_name: 'HYLN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12595792',
    name: 'Addex Therapeutics',
    short_name: 'ADXN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595793',
    name: 'Aditx',
    short_name: 'ADTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595794',
    name: 'Allovir',
    short_name: 'ALVR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595795',
    name: 'Alx Oncology',
    short_name: 'ALXO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595796',
    name: 'Amryt Pharma Holdings',
    short_name: 'AMYT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595797',
    name: 'Annexon',
    short_name: 'ANNX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595798',
    name: 'Berkeley Lights',
    short_name: 'BLI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595799',
    name: 'Gohealth',
    short_name: 'GOCO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595800',
    name: 'Immatics NV',
    short_name: 'IMTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595801',
    name: 'Inozyme',
    short_name: 'INZY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595802',
    name: 'Inventiva',
    short_name: 'IVA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595803',
    name: 'Iteos',
    short_name: 'ITOS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595804',
    name: 'Li Auto',
    short_name: 'LI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595805',
    name: 'Nkarta',
    short_name: 'NKTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595806',
    name: 'Nurix',
    short_name: 'NRIX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595807',
    name: 'Pandion',
    short_name: 'PAND',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595808',
    name: 'Pennant Group',
    short_name: 'PNTG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595809',
    name: 'Poseida',
    short_name: 'PSTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595810',
    name: 'Relay',
    short_name: 'RLAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595811',
    name: 'Renalytix AI Nas',
    short_name: 'RNLX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595812',
    name: 'Surgalign Holdings',
    short_name: 'SRGA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595813',
    name: 'Trean Insurance',
    short_name: 'TIG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595834',
    name: 'Flux Power Holdings',
    short_name: 'FLUX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595835',
    name: 'Vasta Platform',
    short_name: 'VSTA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595836',
    name: 'Vital Farms',
    short_name: 'VITL',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595837',
    name: 'Kubient',
    short_name: 'KBNT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595838',
    name: 'Corvus Gold Inc',
    short_name: 'KOR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595839',
    name: 'Vincerx Pharma',
    short_name: 'VINC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595840',
    name: 'OLB Group',
    short_name: 'OLB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595880',
    name: 'Partners Bancorp',
    short_name: 'PTRS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595881',
    name: 'IBEX',
    short_name: 'IBEX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595882',
    name: 'Bigcommerce',
    short_name: 'BIGC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595883',
    name: 'Rackspace',
    short_name: 'RXT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595884',
    name: 'Duck Creek',
    short_name: 'DCT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595894',
    name: 'Fathom',
    short_name: 'FTHM',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595895',
    name: 'Health Sciences Acq',
    short_name: 'HSAQ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595896',
    name: 'Gemini Therapeutics',
    short_name: 'GMTX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595897',
    name: 'Cerevel Therapeutics Holdings',
    short_name: 'CERE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595898',
    name: 'Innoviz Technologies',
    short_name: 'INVZ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595902',
    name: 'Inhibrx',
    short_name: 'INBX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595903',
    name: 'Kymera',
    short_name: 'KYMR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595904',
    name: 'Nano X',
    short_name: 'NNOX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595905',
    name: 'Acutus Medical',
    short_name: 'AFIB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595906',
    name: 'Checkmate',
    short_name: 'CMPI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595907',
    name: 'CureVac NV',
    short_name: 'CVAC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595908',
    name: 'Freeline',
    short_name: 'FRLN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595909',
    name: 'Harmony Bio',
    short_name: 'HRMY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595912',
    name: 'Heritage Global',
    short_name: 'HGBL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595913',
    name: 'Panbela Therapeutics',
    short_name: 'PBLA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595953',
    name: 'Creatd',
    short_name: 'CRTD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595954',
    name: 'American Outdoor Brands',
    short_name: 'AOUT',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595955',
    name: 'GreenPower Motor',
    short_name: 'GP',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595956',
    name: 'Maxeon Solar Technologies',
    short_name: 'MAXN',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595957',
    name: 'Vitru',
    short_name: 'VTRU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12595958',
    name: 'Applied UV',
    short_name: 'AUVI',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596004',
    name: 'Jfrog',
    short_name: 'FROG',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596005',
    name: 'Sumo Logic',
    short_name: 'SUMO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596006',
    name: 'Corsair',
    short_name: 'CRSR',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596027',
    name: 'Medallion',
    short_name: 'MFIN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596028',
    name: 'Oncology Institute',
    short_name: 'DFPH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596029',
    name: 'Greenrose Acquisition',
    short_name: 'GNRS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'OTC Markets',
    ccy: 'USD'
  },
  {
    id: '12596030',
    name: 'Talkspace',
    short_name: 'TALK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596031',
    name: 'Plby Group',
    short_name: 'PLBY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596032',
    name: 'Faraday Future Intelligent Electric',
    short_name: 'FFIE',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596033',
    name: 'Roth Ch Acquisition I Co',
    short_name: 'ROCH_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596034',
    name: 'Anghami De',
    short_name: 'VMAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596035',
    name: 'Yunhong International',
    short_name: 'ZGYH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596036',
    name: 'Tango Therapeutics',
    short_name: 'TNGX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596037',
    name: 'Stepstone',
    short_name: 'STEP',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596038',
    name: 'Origin Materials',
    short_name: 'ORGN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596039',
    name: 'ACE Convergence Acquisition',
    short_name: 'ACEV',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596040',
    name: 'CareMax',
    short_name: 'CMAX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596041',
    name: 'East Resources Acquisition Co',
    short_name: 'ERES',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596042',
    name: 'E.Merge Technology Acquisition',
    short_name: 'ETAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596043',
    name: 'Electric Last Mile Solutions',
    short_name: 'ELMS',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596044',
    name: 'Greencity Acquisition',
    short_name: 'GRCY',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596045',
    name: 'Malacca Straits Acquisition Co',
    short_name: 'MLAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596046',
    name: 'Evolv Technologies Holdings',
    short_name: 'EVLV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596047',
    name: 'Siyata Mobile',
    short_name: 'SYTA',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596048',
    name: 'Albertsons',
    short_name: 'ACI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596049',
    name: 'AllianceBernstein Holding LP',
    short_name: 'AB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596050',
    name: 'Alpine Income',
    short_name: 'PINE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596051',
    name: 'FREYR Battery',
    short_name: 'FREY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596052',
    name: 'American Well',
    short_name: 'AMWL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596053',
    name: 'Ares Management',
    short_name: 'ARES',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596054',
    name: 'Eos Energy Enterprises',
    short_name: 'EOSE',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596055',
    name: 'Bain Capital Specialty Finance',
    short_name: 'BCSF',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596056',
    name: 'BanColombia ADR',
    short_name: 'CIB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596057',
    name: 'Baytex Energy Corp',
    short_name: 'BTE',
    country: 'united-states',
    sector: 'Energy',
    exch: '',
    ccy: ''
  },
  {
    id: '12596058',
    name: 'Bellring',
    short_name: 'BRBR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596059',
    name: 'BG Staffing Inc',
    short_name: 'BGSF',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596060',
    name: 'Bill Com',
    short_name: 'BILL',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596061',
    name: 'Black Stone Minerals',
    short_name: 'BSM',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596062',
    name: 'BP Midstream Partners',
    short_name: 'BPMP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596063',
    name: 'Braskem A',
    short_name: 'BAK',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596064',
    name: 'Brookfield Business',
    short_name: 'BBU',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596065',
    name: 'Brookfield Infra',
    short_name: 'BIPC',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596066',
    name: 'Brookfield Infrastructure Partners',
    short_name: 'BIP',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596067',
    name: 'Capstar Special Purpose Acquisition',
    short_name: 'CPSR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596068',
    name: 'E2open Parent Holdings',
    short_name: 'ETWO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596069',
    name: 'Cedar Fair LP',
    short_name: 'FUN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596070',
    name: 'Skillsoft Corp Class A',
    short_name: 'SKIL',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596071',
    name: 'Ciner Resources',
    short_name: 'CINR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596072',
    name: 'Quanergy Systems',
    short_name: 'CCAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596073',
    name: 'Coca-Cola Femsa ADR',
    short_name: 'KOF',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596074',
    name: 'Companhia Brasileira de Distribuicao',
    short_name: 'CBD',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596075',
    name: 'CONSOL Coal',
    short_name: 'CCR',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596076',
    name: 'Azek Company',
    short_name: 'AZEK',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596077',
    name: 'Crossamerica Partners LP',
    short_name: 'CAPL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596078',
    name: 'CVR Partners LP',
    short_name: 'UAN',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596079',
    name: 'Vicarious Surgical',
    short_name: 'RBOT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596080',
    name: 'Delek Logistics Partners LP',
    short_name: 'DKL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596081',
    name: 'Rush Street',
    short_name: 'DMYT_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596082',
    name: 'Dun And Bradstreet',
    short_name: 'DNB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596083',
    name: 'Dynagas LNG',
    short_name: 'DLNG',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596084',
    name: 'Energy Transfer',
    short_name: 'ET',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596085',
    name: 'Enerplus',
    short_name: 'ERF',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596086',
    name: 'EnLink Midstream LLC',
    short_name: 'ENLC',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596087',
    name: 'Enterprise Products Partners LP',
    short_name: 'EPD',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596088',
    name: 'Skillz Platform',
    short_name: 'SKLZ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596089',
    name: 'Alight',
    short_name: 'ALIT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596090',
    name: 'MP Materials',
    short_name: 'MP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596091',
    name: 'FS KKR Capital',
    short_name: 'FSKR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596092',
    name: 'Fusion Acquisition',
    short_name: 'FUSE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596093',
    name: 'Shapeways Holdings',
    short_name: 'GLEO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596094',
    name: 'GasLog Partners LP',
    short_name: 'GLOP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596095',
    name: 'GigCapital2',
    short_name: 'GIX_old',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596096',
    name: 'Lightning Emotors',
    short_name: 'ZEV',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596097',
    name: 'Global Partners',
    short_name: 'GLP',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596098',
    name: 'Grupo Aval',
    short_name: 'AVAL',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596099',
    name: 'GS Acquisition Holdings',
    short_name: 'GSAH',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596100',
    name: 'Hoegh LNG Partners LP',
    short_name: 'HMLP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596101',
    name: 'Holly Energy Partners LP',
    short_name: 'HEP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596102',
    name: 'HPX',
    short_name: 'HPX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596103',
    name: 'Aeva Technologies',
    short_name: 'AEVA',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596104',
    name: 'Cano Health',
    short_name: 'CANO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596105',
    name: 'Janus International Group',
    short_name: 'JBI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596106',
    name: 'Ke Hldg',
    short_name: 'BEKE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596107',
    name: 'Quantumscape',
    short_name: 'QS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596108',
    name: 'KNOT Offshore Partners LP',
    short_name: 'KNOP',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596109',
    name: 'Ironnet',
    short_name: 'IRNT',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596110',
    name: 'Danimer Scientific',
    short_name: 'DNMR',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596111',
    name: 'Butterfly Network',
    short_name: 'BFLY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596112',
    name: 'Magellan',
    short_name: 'MMP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596113',
    name: 'Montrose',
    short_name: 'MEG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596114',
    name: 'Natura & Co',
    short_name: 'NTCO',
    country: 'united-states',
    sector: 'Consumer Staples',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596115',
    name: 'Natural Resource LP',
    short_name: 'NRP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596116',
    name: 'Navios Maritime Unit',
    short_name: 'NMM',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596117',
    name: 'Netstreit',
    short_name: 'NTST',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596118',
    name: 'NGL Energy Partners LP',
    short_name: 'NGL',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596119',
    name: 'Nustar',
    short_name: 'NS',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596120',
    name: 'Oak Street Health',
    short_name: 'OSH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596121',
    name: 'Hims Hers Health',
    short_name: 'HIMS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596122',
    name: 'Oneconnect Fin',
    short_name: 'OCFT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596123',
    name: 'Blacksky Technology',
    short_name: 'BKSY',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596124',
    name: 'Nuvation Bio',
    short_name: 'NUVB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596125',
    name: 'PBF Logistics LP',
    short_name: 'PBFX',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596126',
    name: 'Pembina Pipeline',
    short_name: 'PBA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596127',
    name: 'Permian Basin Royalty Trust',
    short_name: 'PBT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596128',
    name: 'XL Fleet',
    short_name: 'XL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596129',
    name: 'Plains All American Pipeline',
    short_name: 'PAA',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596130',
    name: 'Finance of America Companies',
    short_name: 'FOA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596131',
    name: 'Romeo Power',
    short_name: 'RMO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596132',
    name: 'Rocket',
    short_name: 'RKT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596133',
    name: 'SC Health',
    short_name: 'SCPE',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596134',
    name: 'SCVX',
    short_name: 'SCVX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596135',
    name: 'Selectquote',
    short_name: 'SLQT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596136',
    name: 'Shift4 Payments Inc',
    short_name: 'FOUR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596137',
    name: 'Silvergate Cap',
    short_name: 'SI',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596138',
    name: 'Snowflake',
    short_name: 'SNOW',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596139',
    name: 'Clover Health Investments',
    short_name: 'CLOV',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596140',
    name: 'Opendoor Tech',
    short_name: 'OPEN',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596141',
    name: 'Sprague Resources LP',
    short_name: 'SRLP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596142',
    name: 'Sprott Inc.',
    short_name: 'SII',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596143',
    name: 'StoneMor Partners LP',
    short_name: 'STON',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596144',
    name: 'Suburban Propane Partners LP',
    short_name: 'SPH',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596145',
    name: 'TMC the metals company',
    short_name: 'TMC',
    country: 'united-states',
    sector: 'Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596146',
    name: 'ChargePoint Holdings',
    short_name: 'CHPT',
    country: 'united-states',
    sector: 'Utilities',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596147',
    name: 'TC PipeLines LP',
    short_name: 'TCP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596149',
    name: 'System1',
    short_name: 'TREB',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596150',
    name: 'Desktop Metal',
    short_name: 'DM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596151',
    name: 'USA Compression Partners LP',
    short_name: 'USAC',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596152',
    name: 'Virgin Galactic Holdings',
    short_name: 'SPCE',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596153',
    name: 'VirnetX',
    short_name: 'VHC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596154',
    name: 'Vivint Smart Home',
    short_name: 'VVNT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596155',
    name: 'Westlake Chemical Partners LP',
    short_name: 'WLKP',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596156',
    name: 'Xpeng',
    short_name: 'XPEV',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12596223',
    name: 'Akumin',
    short_name: 'AKU',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596224',
    name: 'Amesite',
    short_name: 'AMST',
    country: 'united-states',
    sector: 'Consumer Discretionary',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596225',
    name: 'Athira Pharma',
    short_name: 'ATHA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596226',
    name: 'Bentley',
    short_name: 'BSY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596227',
    name: 'Biovie',
    short_name: 'BIVI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596228',
    name: 'Compass Pathways',
    short_name: 'CMPS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596229',
    name: 'Dyne',
    short_name: 'DYN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596230',
    name: 'GeoVax Labs',
    short_name: 'GOVX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596231',
    name: 'Goodrx',
    short_name: 'GDRX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596232',
    name: 'Graybug Vision',
    short_name: 'GRAY',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596233',
    name: 'Greenwich Life',
    short_name: 'GLSI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596234',
    name: 'Humanigen',
    short_name: 'HGEN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596235',
    name: 'Medicenna',
    short_name: 'MDNA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596236',
    name: 'Metacrine',
    short_name: 'MTCR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596237',
    name: 'Orphazyme',
    short_name: 'ORPH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596238',
    name: 'Outset Medical',
    short_name: 'OM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596239',
    name: 'Pactiv Evergreen',
    short_name: 'PTVE',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596240',
    name: 'Painreform',
    short_name: 'PRFX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596241',
    name: 'Pmv Pharma',
    short_name: 'PMVP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596242',
    name: 'Prelude',
    short_name: 'PRLD',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596243',
    name: 'Silence Therapeutics',
    short_name: 'SLN',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596244',
    name: 'Taysha Gene',
    short_name: 'TSHA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12596748',
    name: 'Datto',
    short_name: 'MSP',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12599452',
    name: 'Fubotv',
    short_name: 'FUBO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12605944',
    name: 'Vontier',
    short_name: 'VNT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12670581',
    name: 'Thryv Holdings Inc',
    short_name: 'THRY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12670582',
    name: 'Mission Produce',
    short_name: 'AVO',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12670583',
    name: 'Academy Sports',
    short_name: 'ASO',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12670584',
    name: 'Lixiang Education',
    short_name: 'LXEH',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12670585',
    name: 'Array',
    short_name: 'ARRY',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12674768',
    name: '5 01 Acq',
    short_name: 'FVAM',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12674769',
    name: 'Abcam',
    short_name: 'ABCM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12674770',
    name: 'Aligos',
    short_name: 'ALGS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12674771',
    name: 'Aziyo',
    short_name: 'AZYO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12674772',
    name: 'Bcls Acq',
    short_name: 'BLSA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12674773',
    name: 'C4',
    short_name: 'CCCC',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12674774',
    name: 'Chindata',
    short_name: 'CD',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12676568',
    name: 'Codiak',
    short_name: 'CDAK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12676569',
    name: 'Eargo',
    short_name: 'EAR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12676570',
    name: 'Foghorn',
    short_name: 'FHTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12676571',
    name: 'Payoneer Global Inc',
    short_name: 'PAYO',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12676572',
    name: 'Harbor Custom',
    short_name: 'HCDI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678767',
    name: 'MoonLake Immunotherapeutics',
    short_name: 'HLXA',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678768',
    name: 'Immunome',
    short_name: 'IMNM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678769',
    name: 'Intrusion',
    short_name: 'INTZ',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678770',
    name: 'Kiromic',
    short_name: 'KRBP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678771',
    name: 'Kismet Acquisition One',
    short_name: 'KSMT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678772',
    name: 'Kronos Bio',
    short_name: 'KRON',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678773',
    name: 'LENSAR',
    short_name: 'LNSR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678774',
    name: 'McAfee',
    short_name: 'MCFE',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678775',
    name: 'Leafly Holdings',
    short_name: 'MCMJ',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12678776',
    name: 'Mingzhu',
    short_name: 'YGMZ',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682145',
    name: 'Oncorus',
    short_name: 'ONCR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682146',
    name: 'Opthea',
    short_name: 'OPT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682147',
    name: 'Praxis Precision',
    short_name: 'PRAX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682148',
    name: 'Presidio Property',
    short_name: 'SQFT',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682149',
    name: 'Processa Pharmaceuticals',
    short_name: 'PCSA',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682150',
    name: 'Pulmonx',
    short_name: 'LUNG',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682151',
    name: 'Radius Global Infrastructure',
    short_name: 'RADI',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682152',
    name: 'Shattuck Labs',
    short_name: 'STTK',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682153',
    name: 'Software Acquisition Group',
    short_name: 'SAII',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12682154',
    name: 'Spruce',
    short_name: 'SPRB',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12686922',
    name: 'Tarsus',
    short_name: 'TARS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12686923',
    name: 'TOMI Environmental Solutions',
    short_name: 'TOMZ',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769396',
    name: '17 Education Tech',
    short_name: 'YQ',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769397',
    name: 'Silverback',
    short_name: 'SBTX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769398',
    name: 'Sigilon',
    short_name: 'SGTX',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769399',
    name: 'Seer',
    short_name: 'SEER',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769400',
    name: 'Ondas',
    short_name: 'ONDS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769408',
    name: 'Kinnate',
    short_name: 'KNTE',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769409',
    name: 'Docebo',
    short_name: 'DCBO',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769414',
    name: 'Ammo',
    short_name: 'POWW',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769419',
    name: 'Beauty Health Co',
    short_name: 'SKIN',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769420',
    name: 'Cyxtera Technologies',
    short_name: 'CYXT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769421',
    name: 'Nextnav Acquisition',
    short_name: 'TMTS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769422',
    name: 'Sharecare',
    short_name: 'SHCR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769423',
    name: 'BowX Acquisition',
    short_name: 'BOWX',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769424',
    name: 'Proterra',
    short_name: 'PTRA',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769425',
    name: 'CompoSecure',
    short_name: 'DBDR',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769426',
    name: 'Recharge Acquisition',
    short_name: 'RCHG',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769427',
    name: 'Lilium NV',
    short_name: 'LILM',
    country: 'united-states',
    sector: 'Industrials',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769428',
    name: 'PureTech Health',
    short_name: 'PRTC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769429',
    name: 'PROG Holdings',
    short_name: 'PRG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12769430',
    name: 'Jiya Acquisition',
    short_name: 'JYAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769431',
    name: 'InMed Pharmaceuticals',
    short_name: 'INM',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769432',
    name: 'Arbe Robotics',
    short_name: 'ITAC',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769433',
    name: 'Concentrix',
    short_name: 'CNXC',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769452',
    name: "Bally's",
    short_name: 'BALY',
    country: 'united-states',
    sector: 'Services',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12769468',
    name: 'Lixte Bio',
    short_name: 'LIXT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769474',
    name: 'Ozon',
    short_name: 'OZON',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769475',
    name: 'Alset Ehome International',
    short_name: 'AEI',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769480',
    name: 'Sotera Health',
    short_name: 'SHC',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769482',
    name: 'Cantaloupe',
    short_name: 'CTLP',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769483',
    name: 'Maravai Lifesciences',
    short_name: 'MRVI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769484',
    name: 'Yatsen',
    short_name: 'YSG',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12769486',
    name: 'Telos',
    short_name: 'TLS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769487',
    name: 'Olema',
    short_name: 'OLMA',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769488',
    name: 'Neogames',
    short_name: 'NGMS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769493',
    name: 'Smith-Midland Corp',
    short_name: 'SMID',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769494',
    name: 'Cvent Holding',
    short_name: 'DGNS',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769496',
    name: 'Ocuphire Pharma',
    short_name: 'OCUP',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769498',
    name: 'INVO Bioscience',
    short_name: 'INVO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769502',
    name: 'Rezolute',
    short_name: 'RZLT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769545',
    name: 'Deerfield Healthcare Technology Acquisitions',
    short_name: 'DFHTU',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769552',
    name: 'Sanara Medtech',
    short_name: 'SMTI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769564',
    name: 'Jupiter Wellness',
    short_name: 'JUPW',
    country: 'united-states',
    sector: 'Consumer/Non-Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769565',
    name: 'Atea',
    short_name: 'AVIR',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769566',
    name: 'Sqz Bio',
    short_name: 'SQZ',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12769577',
    name: 'Mediaalpha',
    short_name: 'MAX',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12769578',
    name: 'Biodesix',
    short_name: 'BDSX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769579',
    name: 'Absolute Software',
    short_name: 'ABST',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769580',
    name: 'Gatos Silver',
    short_name: 'GATO',
    country: 'united-states',
    sector: 'Basic Materials',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12769581',
    name: 'Root',
    short_name: 'ROOT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769590',
    name: 'Allegro',
    short_name: 'ALGM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769591',
    name: 'Galecto',
    short_name: 'GLTO',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12769592',
    name: 'Leslies',
    short_name: 'LESL',
    country: 'united-states',
    sector: 'Consumer Cyclical',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12811308',
    name: 'Bridgetown Holdings',
    short_name: 'BTWN',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12811309',
    name: 'Cipher Mining',
    short_name: 'CIFR',
    country: 'united-states',
    sector: 'Information Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12821621',
    name: 'Petros Pharmaceuticals',
    short_name: 'PTPI',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12866903',
    name: 'Cyclo Therapeutics',
    short_name: 'CYTH',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12869303',
    name: 'Pubmatic ',
    short_name: 'PUBM',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12913844',
    name: 'C3 Ai',
    short_name: 'AI',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12913845',
    name: 'DoorDash',
    short_name: 'DASH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NYSE',
    ccy: 'USD'
  },
  {
    id: '12916567',
    name: 'Conversion Labs',
    short_name: 'CVLB_old',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12921589',
    name: 'Hydrofarm',
    short_name: 'HYFM',
    country: 'united-states',
    sector: 'Capital Goods',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12923473',
    name: 'Pangaea Logistic',
    short_name: 'PANL',
    country: 'united-states',
    sector: 'Transportation',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12924129',
    name: 'Airbnb',
    short_name: 'ABNB',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12924412',
    name: '4D Molecular',
    short_name: 'FDMT',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12924413',
    name: 'Abcellera Biologics',
    short_name: 'ABCL',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12924414',
    name: 'Certara',
    short_name: 'CERT',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12927412',
    name: 'Nanobiotix',
    short_name: 'NBTX',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '12944953',
    name: 'Vivos',
    short_name: 'VVOS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13032461',
    name: 'Plains GP Holdings',
    short_name: 'PAGP',
    country: 'united-states',
    sector: 'Energy',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13065438',
    name: 'Meiwu Technology',
    short_name: 'WNW',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13077497',
    name: 'Oriental Culture',
    short_name: 'OCG',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13097482',
    name: 'Scopus',
    short_name: 'SCPS',
    country: 'united-states',
    sector: 'Healthcare',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13099400',
    name: 'Upstart',
    short_name: 'UPST',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13104504',
    name: 'Contextlogic',
    short_name: 'WISH',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13105987',
    name: 'Bioatla',
    short_name: 'BCAB',
    country: 'united-states',
    sector: 'Services',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13111905',
    name: 'Midwest Holding',
    short_name: 'MDWT',
    country: 'united-states',
    sector: 'Financial',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
  {
    id: '13112506',
    name: '908 Devices',
    short_name: 'MASS',
    country: 'united-states',
    sector: 'Technology',
    exch: 'NASDAQ',
    ccy: 'USD'
  },
];