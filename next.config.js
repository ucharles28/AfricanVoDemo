/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  options: {
    case: 'insentive'
  },
}

// const isDev = NODE_ENV === 'development'

// module.exports = {
//   webpack: config => {
//     if (isDev) {
//       return config;
//     }

//     return {
//       ...config,
//       externals: {
//         react: 'React',
//         'react-dom': 'ReactDOM',
//       },
//     };
//   },
// };