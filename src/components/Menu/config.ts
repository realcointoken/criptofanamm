import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://cripto-fan-token.vercel.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://criptofanamm.vercel.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://criptofanamm.vercel.app/#/swap',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://cripto-fan-token.vercel.app/farms',
  },
  {
    label: 'Trucks',
    icon: 'PoolIcon',
    href: 'https://cripto-fan-token.vercel.app/pools',
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
        href: 'https://criptofan.com.br/wp-content/uploads/2022/07/LitePaper-1.0.pdf',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/',
      },
    ],
  },
  {
    label: 'Hacken Audit',
    icon: 'AuditIcon',
    href: 'https://criptofan.com.br/wp-content/uploads/2022/07/LitePaper-1.0.pdf',
  },
]

export default config
