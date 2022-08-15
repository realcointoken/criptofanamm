import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://staking.cryptofan.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.cryptofan.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.cryptofan.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://staking.cryptofan.finance/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://staking.cryptofan.finance/#/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/', // taco-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Hacken Audit',
        href: 'https://cryptofan.finance/',
      },
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Docs',
        href: 'https://cryptofan.finance/wp-content/uploads/2022/07/WhitePaper-1.0-CryptoFan-Token-1.pdf',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/',
      },
    ],
  },
  {
    label: 'Website',
    icon: 'AuditIcon',
    href: 'https://cryptofan.finance/',
  },
]

export default config
