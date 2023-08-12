export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <h1
        className='text-9xl font-extrabold mt-8 mb-8'
        style={{
          letterSpacing: '-1px',
          backgroundImage: 'linear-gradient(180deg, #555, #000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Status Code 0.
      </h1>
    </main>
  )
}