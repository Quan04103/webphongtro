import React, { memo, useState, useEffect } from "react";
import icons from "../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { formatVietnameseToString } from "../ultils/Common/formatVietnameseToString";
import { path } from "../ultils/constant";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  apiCreatePostLike,
  apiDeletePostLike,
  apiGetPostLike,
} from "../services";
import { getPostLike } from "../store/actions";

const { GrStar, RiHeartFill, RiHeartLine } = icons;

const indexs = [0, 1, 2, 3];

const Item = ({
  images,
  user,
  title,
  star,
  description,
  attributes,
  address,
  id,
  overviews,
  postLike,
}) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isHoverHeart, setIsHoverHeart] = useState(() =>
    postLike.some((post) => post.postId === id)
  );
  // console.log(isHoverHeart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickHeart = async () => {
    setIsHoverHeart(!isHoverHeart);
    if (!isHoverHeart) {
      await apiCreatePostLike(id);
      dispatch(getPostLike());
    } else {
      console.log("bo thich");
      await apiDeletePostLike(id);
      dispatch(getPostLike());
    }
    // console.log(isHoverHeart);
  };
  const handleStar = (star) => {
    let arrStar = [];
    for (let i = 1; i <= +star; i++) {
      arrStar.push(<GrStar className="star-item" size={20} color="yellow" />);
    }
    return arrStar;
  };
  // console.log(handleStar(5));
  const formatDate = "DD/MM/YYYY";
  const checkStatus = (datetime) =>
    moment(datetime, formatDate).isSameOrAfter(new Date().toDateString());

  return (
    <div className="relative flex w-full p-4 border-t border-orange-500">
      <Link
        to={`${path.DETAIL}${formatVietnameseToString(
          title?.replaceAll("/", "")
        )}/${id}`}
        className="w-[35%] "
      >
        <div className="grid grid-cols-2 gap-[2px]   w-full">
          {images.length > 0 &&
            images
              .filter((i, index) => indexs.some((i) => i === index))
              ?.map((i, number) => {
                return (
                  <img
                    key={number}
                    src={i}
                    alt="preview"
                    className="w-[130px] h-[135px] object-cover"
                  />
                );
              })}
          <span className="absolute px-2 text-sm text-white bg-gray-500 rounded-lg bottom-5 left-5">
            {`${images.length} ảnh`}
          </span>
        </div>
      </Link>
      {isLoggedIn && (
        <span
          className="absolute text-red-600 rounded-lg cursor-pointer top-5 left-5"
          onClick={() => {
            handleClickHeart();
          }}
        >
          {isHoverHeart ? (
            <RiHeartFill color="red" size={20} />
          ) : (
            <RiHeartLine color="red" size={20} />
          )}
        </span>
      )}
      <div className="w-[65%] pl-2 relative">
        {!checkStatus(
          overviews?.expire?.split(" ")[3] || overviews?.expire
        ) && (
          <div className="absolute flex items-center justify-center w-full h-full text-3xl text-white z-1 bg-overlay-70">
            Bài viết đã hết hạn !
          </div>
        )}

        <div className="flex ">
          <Link
            to={`${path.DETAIL}${formatVietnameseToString(
              title?.replaceAll("/", "")
            )}/${id}`}
            className="text-xl text-red-500 hover:underline cursor:pointer"
          >
            {handleStar(+star).length > 0 &&
              handleStar(+star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {title}
          </Link>
        </div>
        <div className="my-2 ">
          <div className="flex items-center justify-between my-2">
            <div className="text-lg font-semibold text-green-700 whitespace-nowrap">
              Giá: {attributes?.price}
            </div>
            <div className="italic">Diện tich: {attributes?.acreage}</div>
          </div>
          <div className="my-2 italic font-bold ">
            {`${address.split(",")[address.split(",").length - 2]}${
              address.split(",")[address.split(",").length - 1]
            }`}
          </div>
          <div className="item-discription">{description}</div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-1">
              <img
                className="w-[30px] h-[30px] object-cover rounded-full"
                src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
                alt="avata"
              />
              <span className="text-sm">
                {user.name
                  ? user.positionCode !== "P2"
                    ? user?.name
                    : `${user?.name} (đã bị khóa quyền đăng bài)`
                  : "Tài khoản đã bị xóa ! Vui lòng không xem bài đăng này"}
              </span>
            </div>
            <div className="flex gap-2">
              {user.phone && (
                <a href={`tel:${user.phone}`}>
                  <button
                    type="button"
                    className="px-2 text-sm text-white bg-blue-600 rounded-lg"
                  >
                    {`Gọi ${user?.phone}`}
                  </button>
                </a>
              )}
              {user.zalo && (
                <a href={`https://zalo.me/${user?.zalo}`}>
                  <button
                    type="button"
                    className="px-2 text-sm text-blue-500 border border-blue-500 rounded-lg"
                  >
                    Nhắn Zalo
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
