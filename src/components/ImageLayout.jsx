function ImageLayout(){
    return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='flex flex-row-reverse justify-between items-center w-[500px] border-4 border-black-600 p-10'>
      <div>
        <img className='size-32' src='/bagaan.jpg' />
      </div>
      <div className='flex flex-col w-1/2'>
        <h1 className='font-bold text-orange-500 text-left'>BAGAAN THAKALI</h1>
        <p className='text-black-500 font-bold text-left'> Bagaan Thakali is home to authentic thakali cuisine made with love.</p>
      </div>
      </div>
    </div>
    )
}

export default ImageLayout