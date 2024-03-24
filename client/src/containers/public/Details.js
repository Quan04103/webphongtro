import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPostsLimit } from "../../store/actions";
import { Item } from "../../components";
import Footer from "./Footer";
import * as actions from "../../store/actions";
import anhAvt from "../../assets/anhAvt.jpg";
import iconZalo from "../../assets/iconZalo1.jpg";
import { ComplexNavbar } from "./Header";
import { List } from "./index";
import { useSearchParams } from "react-router-dom";
import { ComplexNavbarDetail } from "./headerDetail";
import { Anh } from "../../components";
import { StarIcon } from "@heroicons/react/24/solid";
import { apiGetPostsLimit } from "../../services";
import { Carousel } from "@material-tailwind/react";

export const ContextRegiterDetail = createContext();
export const ContextLoginDetail = createContext();

const Details = () => {
  const [params] = useSearchParams();
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [isLoginPopupOpenDetail, setIsLoginPopupOpenDetail] = useState(false);
  const [isRegisterPopupOpenDetail, setIsRegisterPopupOpenDetail] =
    useState(false);
  const { posts } = useSelector((state) => state.post);
  const [imgRes, setImgRes] = useState([]);

  useEffect(() => {
    postId && dispatch(getPostsLimit({ id: postId }));
  }, [postId]);

  useEffect(() => {
    const imageData = posts[0]?.images.image;
    if (imageData) {
      const imageArray = JSON.parse(imageData);
      setImgRes(imageArray);
    }
  }, [posts]);

  console.log(imgRes);
  
  const parseDescription = (description) => {
    try {
      const parsedDescription = JSON.parse(description);
      if (Array.isArray(parsedDescription)) {
        return parsedDescription.map((item, index) => (
          <span key={index}>{item}</span>
        ));
      } else {
        return <span>{parsedDescription}</span>;
      }
    } catch (error) {
      return <span>{description}</span>;
    }
  };

  const { categories } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(actions.getCategories());
  }, [actions.getCategories]);
  return (
    <ContextRegiterDetail.Provider
      value={[isRegisterPopupOpenDetail, setIsRegisterPopupOpenDetail]}
    >
      <ContextLoginDetail.Provider
        value={[isLoginPopupOpenDetail, setIsLoginPopupOpenDetail]}
      >
        <div
          style={styles.container}
          className="z-50 flex-col flex justify-center"
        >
          <div
            className={
              isRegisterPopupOpenDetail
                ? "fixed inset-0 backdrop-blur-sm absolute z-30"
                : ""
            }
          >
            <div
              className={
                isLoginPopupOpenDetail
                  ? "fixed inset-0 backdrop-blur-sm absolute z-30"
                  : ""
              }
            >
              <ComplexNavbarDetail />
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center">
          {/* Ảnh */}
          <div class="relative p-7 flex justify-center w-full h-full text-5xl text-black font-inter">


            <div className=" w-full xl:w-[1380px] xl:h-[680px] rounded-xl">
            <Carousel className="rounded-xl ">
    {imgRes &&
      imgRes.map((link, index) => (
        <img
          key={index}
          src={link}
          alt={`Image ${index}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>

              
            </div>
            {/* <img class="absolute  bg-red-200 top-[100px] left-[790px] w-80 h-60 object-cover"
                    src=""
                />
                <img class="absolute bg-blue-50 top-[360px] left-[790px] w-80 h-[244px] object-cover"
                    src="/image.png"
                />
                <img class=" absolute  bg-pink-200 top-[100px] left-[1120px] rounded-tl-none rounded-tr-mini rounded-b-none w-[316px] h-60 object-cover"
                    src="/image-.png"
                />
                <img class="absolute bg-black top-[360px] left-[1120px] rounded-t-none rounded-br-mini rounded-bl-none w-[315px] h-[244px] object-cover"
                    src="/image-.png"
                /> */}
          </div>
          {/* Tiêu đề */}
          <div className="flex items-center justify-center pl-[100px]">
            <div class="xl:text-[40px] text-[30px]   text-[#034DA1] font-semibold font-sans inline-block  ">
              <p class="left-[30px] m-0">{posts[0]?.title}</p>
            </div>
          </div>

          <div className="flex flex-col pl-[100px] pt-[20px] xl:flex-row xl:pl-[250px]">
            <div className="">
              <table
                class=" border border-solid border-[#034DA1] rounded-xl xl:w-[940px] w-[600px]  
                    h-[400px] bg-[#ee4343] xl:text-[25px] text-[20px] text-left text-[#034DA1] dark:text-gray-400 "
              >
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Địa chỉ
                    </th>
                    <td class="px-6 py-4">
                      <b>{posts[0]?.address}</b>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Giá
                    </th>
                    <td class="px-6 py-4">
                      <b>Khoảng {posts[0]?.attributes?.price}</b>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Diện tích
                    </th>
                    <td class="px-6 py-4">
                      <b>{posts[0]?.attributes?.acreage}</b>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Ngày cập nhật
                    </th>
                    <td class="px-6 py-4">
                      <b>{posts[0]?.attributes?.published}</b>
                    </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Điều kiện
                    </th>
                    <td class="px-6 py-4">
                      <b>Sạch sẽ, giữ vệ sinh chung</b>
                    </td>
                  </tr>

                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Mã
                    </th>
                    <td class="px-6 py-4">
                      <b>{posts[0]?.attributes?.hashtag}</b>
                    </td>
                  </tr>
                  <tr class="bg-white ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Đánh giá
                    </th>
                    <td class="px-6 py-4">
                      <b>{posts[0]?.star}/5</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="  w-[336px] h-[351px] text-smi text-[#e4e2e2] pl-[100px] pt-[20px]">
              <div className="rounded-3xs bg-[#034DA1] w-[340px] h-[351px] flex items-center flex-col p-2 pt-3">
                <img
                  className="rounded-[50%] w-[104px] h-[104px] object-cover"
                  alt="avt"
                  src={anhAvt}
                />
                <div className="inline-block w-[102.75px]">Được đăng bởi</div>
                <b className="text-2xl inline-block text-[#ffffff] ">
                  {posts[0]?.user?.name}
                </b>
                <div className="w-[118.83px] h-4 flex flex-row">
                  <div className="inline-block w-[102.75px]">
                    Đang hoạt động
                  </div>
                  <div className="rounded-8xs w-[8.3px] h-2 bg-green-600" />
                </div>
                <div className="xl:w-[304px] w-[150px] h-10 text-2xl text-black pt-3">
                  <div className="rounded-3xs bg-[#ffffff] w-[150px] xl:w-[304px] h-[40px] flex items-center justify-center">
                    <b className="inline-block">{posts[0]?.user?.zalo}</b>
                  </div>
                </div>
                <div className=" xl:w-[304px] w-[150px] h-[40px] pt-4">
                  <div className="rounded-3xs bg-gray-100 box-border xl:w-[304px] w-[150px] h-[38px] border-[1px] border-solid border-black">
                    <div className=" cursor-pointer flex flex-row justify-center items-center ">
                      <button className="xl:w-[304px] w-[150px] h-8 flex flex-row justify-center items-center ">
                        <b className="inline-block w-[67.46px] text-black">
                          Nhắn Zalo
                        </b>
                        <img
                          className="rounded-3xs w-[35px] h-8 object-cover"
                          alt=""
                          src={iconZalo}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thông tin người đăng */}

          <div class="text-[30px]  text-[#034DA1] font-semibold font-sans inline-block pt-10 xl:pl-[250px] pl-[100px]">
            <b>Thông tin mô tả</b>
          </div>
          <div className="xl:pl-[250px] pl-[100px] pt-5">
            <div class=" inline-block xl:text-[25px] text-[20px] border border-solid border-[#034DA1] p-4 rounded-2xl xl:w-[940px] w-[600px]  h-auto">
              <div className="flex flex-col gap-5">
                {/* {posts[0]?.description &&
                  JSON.parse(posts[0]?.description)?.map((item, index) => {
                    return <span key={index}>{item}</span>;
                  })} */}
                  {posts[0]?.description && parseDescription(posts[0]?.description)}
              </div>
            </div>
          </div>
          <div class="  text-[30px]  text-[#034DA1] font-semibold font-sans inline-block pt-10 xl:pl-[250px] pl-[100px] ">
            <b>Thông tin liên hệ</b>
          </div>

          <div class="flex xl:pl-[250px] pl-[100px] pt-[20px]">
            <table class="border border-solid border-[#034DA1] p-4 rounded-2xl w-[940px] h-[400px] bg-[#ee4343] xl:text-[25px] text-[20px] text-left text-[#034DA1] dark:text-gray-400 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Liên hệ
                  </th>
                  <td class="px-6 py-4">
                    <b>{posts[0]?.user?.name}</b>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Số điện thoại
                  </th>
                  <td class="px-6 py-4">
                    <b>{posts[0]?.user?.phone}</b>
                  </td>
                </tr>
                <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Zalo
                  </th>
                  <td class="px-6 py-4">
                    <b>{posts[0]?.user?.zalo}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className=" w-full pt-[200px]">
            <Footer />
          </div>
        </div>

        {/* <div class="absolute top-[2265px] left-[50px] w-[1011px] h-[142.81px]">
                <div class="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[1011px] h-[142.81px]" />
                <div class="absolute top-[17.47px] left-[59.59px] text-dimgray inline-block w-[148.98px] h-[35.96px]">
                    Ngày đăng
                </div>
                <div class="absolute top-[83.22px] left-[49.32px] font-medium inline-block w-[148.98px] h-[35.96px]">
                    20/09/2023

                </div>

                <div class="absolute top-[17.47px] left-[330.84px] text-dimgray inline-block w-[166.45px] h-[33.91px]">
                    Ngày hết hạn
                </div>
                <div class="absolute top-[85.28px] left-[333.92px] font-medium inline-block w-[145.9px] h-[32.88px]">
                {posts[0]?.overviews?.expired}
                </div>

                <div class="absolute top-[17.47px] left-[619.55px] text-dimgray inline-block w-[108.91px] h-[33.91px]">
                    Loại tin
                </div>
                <div class="absolute top-[86.3px] left-[541.46px] font-medium inline-block w-[233.23px] h-[35.96px]">
                    Tin VIP Kim Cương
                </div>
                <div class="absolute top-[17.47px] left-[850.72px] text-dimgray inline-block w-[79.11px] h-[33.91px]">
                    Mã tin
                </div>
                <div class="absolute top-[85.28px] left-[829.14px] font-medium inline-block w-[138.7px] h-[32.88px]">
                    {posts[0]?.attributes?.hashtag}
                </div>
            </div> */}
      </ContextLoginDetail.Provider>
    </ContextRegiterDetail.Provider>
  );
};

const styles = {
  container: {},
};

export default Details;
