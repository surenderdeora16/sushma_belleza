/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-supera-gothic)', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        bebas_Neue: ['Bebas Neue', 'sans-serif']
      },
      keyframes: {
        moveUpDown: {
          '0%': { transform: 'translateY(-35%)' },
          '50%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(-35%)' },
        },
      },
      animation: {
        moveUpDown: 'moveUpDown 4s ease-in-out infinite',
      },
      backgroundImage: {
        'transparent-production': `url('/sushmabelleza/images/transpbg.png')`,
        'transparent-local': `url('/images/transpbg.png')`,

        // Theme Bg Image
        'backgroud-theme-production': `url('/sushmabelleza/images/themebgimg.webp')`,
        'backgroud-theme-local': `url('/images/themebgimg.webp')`,

        // Top Main Banner 
        'mobile-header-section-production': `url('/sushmabelleza/images/topmainbannerbg-mobileimage.png')`,
        'mobile-header-section-local': `url('/images/topmainbannerbg-mobileimage.png')`,

        'header-section-production': `url('/sushmabelleza/images/topmainbannerbg-image.png')`,
        'header-section-local': `url('/images/topmainbannerbg-image.png')`,

        // Top Sub Banner 
        'subHeader-production': `url('/sushmabelleza/images/subHeaderBgimg.webp')`,
        'subHeader-local': `url('/images/subHeaderBgimg.webp')`,

        //About Us Section
        'aboutus-bgSectionImg-production': `url('/sushmabelleza/images/aboutus-sectionbgimg.webp')`,
        'aboutus-bgSectionImg-local': `url('/images/aboutus-sectionbgimg.webp')`,

        'aboutus-bgContainer-production': `url('/sushmabelleza/images/aboutcontanierlayere.webp')`,
        'aboutus-bgContainer-local': `url('/images/aboutcontanierlayere.webp')`,

        // Brochure Section
        'brochure-section-Shadow': 'linear-gradient(88deg, #000000d4 12.53%, #00000014 99%)',

        'mobile-brochure-section-production': `url('/sushmabelleza/images/brochuresectionmobile.png')`,
        'mobile-brochure-section-local': `url('/images/brochuresectionmobile.png')`,

        'brochure-section-production': `url('/sushmabelleza/images/brochuresectionmobile.png')`,
        'brochure-section-local': `url('/images/brochuresectionmobile.png')`,

        // Download Section  
        'download-sectionLeftImg-production': `url('/sushmabelleza/images/downloadsec-bgimg.webp')`,
        'download-sectionLeftImg-local': `url('/images/downloadsec-bgimg.webp')`,

        'download-section-production': `url('/sushmabelleza/images/download-sectionimg.webp')`,
        'download-section-local': `url('/images/download-sectionimg.webp')`,

        //Price List 
        'paymentStructure-section-production': `url('/sushmabelleza/images/payment-structurebg.webp')`,
        'paymentStructure-section-local': `url('/images/payment-structurebg.webp')`,

        //Plans 
        'siteplan-production': `url('/sushmabelleza/images/siteplanbg.svg')`,
        'siteplan-local': `url('/images/siteplanbg.svg')`,

        //Get In Touch (Home Page) 
        'GIT-production': `url('/sushmabelleza/images/getintouchbg.webp')`,
        'GIT-local': `url('/images/getintouchbg.webp')`,

        //Contact Info BG IMG 
        'ContactInfoBG-production': `url('/sushmabelleza/images/contactinfobg-img.webp')`,
        'ContactInfoBG-local': `url('/images/contactinfobg-img.webp')`,

      },
      screens: {
        'xxs': '340px',
        // => @media (min-width: 340px) { ... }

        'bxxs': '380px',
        // => @media (min-width: 380px) { ... }

        'xxs': '410px',
        // => @media (min-width: 410px) { ... }

        'xs': '425px',
        // => @media (min-width: 425px) { ... }

        'cxs': '500px',
        // => @media (min-width: 500px) { ... }

        'bcxs': '591px',
        // => @media (min-width: 500px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'cmd': '888px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1360px',
        // => @media (min-width: 1360px) { ... }

        '3xl': '1441px',
        // => @media (min-width: 1441px) { ... }
      },
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.section-gap': {
          marginTop: '30px',

          '@screen md': {
            marginTop: '50px',
          },

          '@screen lg': {
            marginTop: '60px',
          },
        },

        '.section-gap-inner': {
          paddingTop: '30px',

          '@screen md': {
            paddingTop: '50px',
          },

          '@screen lg': {
            paddingTop: '60px',
          },
        },
      });
    },
  ],
}