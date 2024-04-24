import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Dropdown from '@/shared/@common/ui/Dropdown/Dropdown';
import { Input } from '@/shared/@common/ui/Input/Input';
import UploadImage from '@/features/RegistMyShop/UploadImage';
import Button from '@/shared/@common/ui/Button/Button';
import { Footer } from '@/shared/@common/ui/Footer/Footer';
import { useInput } from '@/shared/@common/ui/Input/hook/inputHook';
import { useTextarea } from '@/shared/@common/ui/Textarea/hook/textareaHook';
import { Textarea } from '@/shared/@common/ui/Textarea/Textarea';
import { NavigationBar } from '@/shared/@common/ui/Nav/NavigationBar';

const editMyShop = () => {

  const router = useRouter();
  const [foodKinds, setFoodKinds] = useState('');
  const [location, setLocation] = useState('');
  const [shopImage, setShopImage] = useState<string | null>(null);

  const name = useInput('');
  const subLocation = useInput('');
  const originalHourlyPay = useInput('');
  const description = useTextarea('');

  const handleClose = () => {
    router.push('/myShopInfo');
  }

  const handleSelectLocations = (option: string) => {
    setLocation(option);
  };

  const handleSelectFoodKinds = (option: string) => {
    setFoodKinds(option);
  };

  const handleShopImage = (image: string | null) => {
    setShopImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name.value,
      category: foodKinds,
      address1: location,
      address2: subLocation.value,
      description: description.value,
      imageUrl: shopImage,
      originalHourlyPay: originalHourlyPay.value,
    };
    console.log(data);
  };

  const handleTotalSubmit = () => {
    console.log('제출 완료');
    console.log(foodKinds);
    console.log(location);
    console.log(shopImage);
    alert('수정이 완료되었습니다');
    router.push('/myShopInfo');
  };


  const kinds = [
    { value: '한식', label: '한식' },
    { value: '중식', label: '중식' },
    { value: '일식', label: '일식' },
    { value: '양식', label: '양식' },
    { value: '분식', label: '분식' },
    { value: '카페', label: '카페' },
    { value: '편의점', label: '편의점' },
    { value: '기타', label: '기타' },
  ];

  const locations = [
    { value: '종로구', label: '서울시 종로구' },
    { value: '중구', label: '서울시 중구' },
    { value: '용산구', label: '서울시 용산구' },
    { value: '성동구', label: '서울시 성동구' },
    { value: '광진구', label: '서울시 광진구' },
    { value: '동대문구', label: '서울시 동대문구' },
    { value: '중랑구', label: '서울시 중랑구' },
    { value: '성북구', label: '서울시 성북구' },
    { value: '강북구', label: '서울시 강북구' },
    { value: '도봉구', label: '서울시 도봉구' },
    { value: '노원구', label: '서울시 노원구' },
    { value: '은평구', label: '서울시 은평구' },
    { value: '서대문구', label: '서울시 서대문구' },
    { value: '마포구', label: '서울시 마포구' },
    { value: '양천구', label: '서울시 양천구' },
    { value: '강서구', label: '서울시 강서구' },
    { value: '구로구', label: '서울시 구로구' },
    { value: '금천구', label: '서울시 금천구' },
    { value: '영등포구', label: '서울시 영등포구' },
    { value: '동작구', label: '서울시 동작구' },
    { value: '관악구', label: '서울시 관악구' },
    { value: '서초구', label: '서울시 서초구' },
    { value: '강남구', label: '서울시 강남구' },
    { value: '송파구', label: '서울시 송파구' },
    { value: '강동구', label: '서울시 강동구' },


  ]

  return (
    <>
      <NavigationBar />
      <div className="flex w-full py-[60px] px-[238px] flex-col items-start gap-2 bg-gray-05">
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-8">
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full justify-between items-center">
              <p className='text-black text-[28px] font-bold'>가게 정보</p>
              <button onClick={handleClose}>
                <Image src={`/images/close.svg`} alt='닫기 버튼' width={32} height={32} />
              </button>
            </div>
            <div className='flex items-start gap-5 mb-6'>
              <div className='flex flex-col items-start gap-2 flex-shrink-0'>
                <Input title='가게 이름*' placeholder='입력' onChange={name.handleInput} />
              </div>
              <div className='flex flex-col items-start gap-2 flex-shrink-0 text-black'>
                <Dropdown 
                  title={'분류*'}
                  options={kinds}
                  onSelect={(option) => handleSelectFoodKinds(option)}
                  defaultValue={'선택'}
                />
              </div>
            </div>
            <div className='flex items-start gap-5 mb-6'>
              <div className='flex flex-col items-start gap-2 flex-shrink-0 text-black'>
                <Dropdown
                  title={'주소*'}
                  options={locations}
                  onSelect={(option) => handleSelectLocations(option)}
                  defaultValue={'선택'}
                />
              </div>
              <div className='flex flex-col items-start gap-2 flex-shrink-0'>
                <Input title='상세 주소*' placeholder='입력' onChange={subLocation.handleInput} />
              </div>
            </div>
            <div className='flex items-start gap-5 mb-6'>
              <div className='flex flex-col items-start gap-2 flex-shrink-0 text-black'>
                <Input title='기본 시급*' placeholder='입력' countText='원' onChange={originalHourlyPay.handleInput} />
              </div>
            </div>
            <div className='flex flex-col items-start gap-5 mb-6'>
              <p className='text-base'>가게 이미지</p>
              <UploadImage onImageChange={handleShopImage}/>
            </div>
            <div className='w-full flex flex-col items-start gap-2'>
              <Textarea
                title='가게 설명'
                width='100%'
                placeholder='입력' 
                onChange={description.handleTextarea} />
            </div>
            <div className='flex mt-8 justify-center'>
              <Button size='large' color='colored' onClick={handleTotalSubmit}>
                완료하기
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default editMyShop;