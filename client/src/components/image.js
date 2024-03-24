import React, { memo } from 'react'

const Anh = ({ images }) => {
    return (
        <div>
         
            {images?.length > 0 && images?.map((item, index) => {
                return (
                    <div>
                        <div key={index}>
                            <img
                                className='absolute bg-blue-gray-400  left-[45px] top-[100px] inline-block rounded-l-lg w-[720px] h-[504px] object-cover'
                                src="{item}"
                                alt='anh'
                            />
                            
                        </div>
                
                        {/* <img class="absolute  bg-red-200 top-[100px] left-[790px] w-80 h-60 object-cover"
                            src="{item}" alt=''
                        />
                        <img class="absolute bg-blue-50 top-[360px] left-[790px] w-80 h-[244px] object-cover"
                            src="{item}" alt=''
                        />
                        <img class=" absolute  bg-pink-200 top-[100px] left-[1120px] rounded-tl-none rounded-tr-mini rounded-b-none w-[316px] h-60 object-cover"
                            src="{item}" alt=''
                        />
                        <img class="absolute bg-black top-[360px] left-[1120px] rounded-t-none rounded-br-mini rounded-bl-none w-[315px] h-[244px] object-cover"
                            src="{item}" alt=''
                        /> */}
                        
                    </div>

                )
            })}
        </div>
    )
}
export default memo(Anh)