import React from 'react'

const Card = ({ image, alt, title, subTitle, id }) => {
  return (
    <div class='h-screen flex items-center justify-center'>
      <card class='rounded-lg'>
        <a href='#'>
          <img src={image} alt={alt} class='rounded-t-lg' />
        </a>

        <div class='bg-black text-center rounded-b-lg pb-5'>
          <p class='text-white text-xl font-bold pt-6'>{title}</p>

          <p class='text-white text-sm font-light pt-6 mb-4'>{subTitle}</p>
          <button
            type='button'
            class='text-gray-900 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium text-s px-5 py-2.5 text-center mr-2 my-2'
          >
            Ver personaje
          </button>
        </div>
      </card>
    </div>
  )
}

export default Card
