module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},

    container: {
      center: true,
      screens: {
        sm: '414px',
        xl: '1920px',
      },
      padding: {
        sm: '0.563rem',
        xl: '16.25rem',
      },
    },
    boxShadow: {
      '3xl':
        ' 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    },
    colors: {
      divider: 'rgba(56, 65, 93, 0.0513276)',
      numbers: 'rgba(56, 65, 93, 0.602109)',
    },
  },
  plugins: [],
};
