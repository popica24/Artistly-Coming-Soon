import SocialComponent from "./SocialComponent";

const SocialContainer = () => {
  return (
    <div className="mt-32 text-center">
      <span className="font-medium text-[1.25rem] xs:text-[0.8rem]">
        Nu uitați să ne urmăriți și pe rețelele noastre de socializare pentru a
        fi la curent cu noutățile și pentru a afla când exact vom fi online.
      </span>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row xs:flex-col">
          <SocialComponent
            left="5.7rem"
            color="#354093"
            text="@artistly.ro"
            link={"https://www.facebook.com/artistlyro/"}
            svgContainer={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="50"
                viewBox="0 0 223 63"
                fill="none"
              >
                <path
                  d="M197.636 4.84285H85.6348C73.1167 4.84285 62.7617 15.1978 61.7053 28.2777C60.1541 12.892 47.158 0.876953 31.3615 0.876953C14.5169 0.876953 0.85849 14.5354 0.85849 31.38C0.85849 48.2246 14.5169 61.883 31.3615 61.883C48.2061 61.883 60.6991 49.3481 61.7807 33.4845C63.1726 46.1871 73.2089 56.1228 83.3291 56.1228H195.33C210.841 56.1228 221.649 44.5857 221.649 30.4828C221.649 16.38 210.841 4.84285 197.627 4.84285H197.636Z"
                  stroke="#354093"
                  stroke-width="1.67691"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            svglogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.83"
                height="40.83"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M25.3699 50.2738C39.1462 50.2738 50.314 39.1059 50.314 25.3297C50.314 11.5535 39.1462 0.38562 25.3699 0.38562C11.5937 0.38562 0.425842 11.5535 0.425842 25.3297C0.425842 39.1059 11.5937 50.2738 25.3699 50.2738Z"
                  fill="#354093"
                />
                <path
                  d="M32.3794 11.5622H26.9462C26.9462 11.5622 22.5276 11.0591 22.4018 15.7293C22.3012 19.3934 22.4018 21.0368 22.4018 21.0368H18.3604V26.2184H22.1503V39.1055H28.2123V26.4699H32.3794V21.0368H27.9608V17.8758C27.9608 17.8758 27.3319 16.1066 32.3794 16.1066V11.5622Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SocialComponent
            link={"https://www.instagram.com/artistlyromania/"}
            left="5.7rem"
            color="#E1306C"
            text="@artistly.ro"
            svgContainer={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="50"
                viewBox="0 0 222 63"
                fill="none"
              >
                <path
                  d="M196.715 4.79399H85.7018C73.294 4.79399 63.0304 15.0437 61.9832 27.9906C60.4458 12.7613 47.5643 0.868408 31.9071 0.868408C15.2111 0.868408 1.67307 14.388 1.67307 31.0614C1.67307 47.7347 15.2111 61.2543 31.9071 61.2543C48.6031 61.2543 60.986 48.8468 62.058 33.1445C63.4376 45.718 73.3854 55.5527 83.4163 55.5527H194.43C209.804 55.5527 220.517 44.1328 220.517 30.1733C220.517 16.2139 209.804 4.79399 196.707 4.79399H196.715Z"
                  stroke="#E1306C"
                  stroke-width="1.67691"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            svglogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.83"
                height="40.83"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M25.198 49.702C38.8527 49.702 49.9221 38.6477 49.9221 25.0115C49.9221 11.3754 38.8527 0.321045 25.198 0.321045C11.5432 0.321045 0.473877 11.3754 0.473877 25.0115C0.473877 38.6477 11.5432 49.702 25.198 49.702Z"
                  fill="#E1306C"
                />
                <path
                  d="M32.1623 37.6763H18.2337C15.2834 37.6763 12.8817 35.2778 12.8817 32.3316V17.6999C12.8817 14.7536 15.2834 12.3468 18.2337 12.3468H32.1623C35.1126 12.3468 37.5226 14.7453 37.5226 17.6999V32.3316C37.5226 35.2778 35.1209 37.6763 32.1623 37.6763ZM18.2337 15.0441C16.771 15.0441 15.5743 16.2309 15.5743 17.6999V32.3316C15.5743 33.7923 16.7627 34.9874 18.2337 34.9874H32.1623C33.625 34.9874 34.8217 33.8006 34.8217 32.3316V17.6999C34.8217 16.2392 33.6333 15.0441 32.1623 15.0441H18.2337Z"
                  fill="white"
                />
                <path
                  d="M25.2063 31.8917C21.4915 31.8917 18.4747 28.879 18.4747 25.1692C18.4747 21.4594 21.4915 18.4468 25.2063 18.4468C28.9212 18.4468 31.9379 21.4594 31.9379 25.1692C31.9379 28.879 28.9212 31.8917 25.2063 31.8917ZM25.2063 21.1358C22.9791 21.1358 21.1757 22.945 21.1757 25.1609C21.1757 27.3769 22.9874 29.1861 25.2063 29.1861C27.4252 29.1861 29.237 27.3769 29.237 25.1609C29.237 22.945 27.4252 21.1358 25.2063 21.1358Z"
                  fill="white"
                />
                <path
                  d="M33.6665 18.5131C33.6665 19.4261 32.9185 20.173 32.0044 20.173C31.0902 20.173 30.3423 19.4261 30.3423 18.5131C30.3423 17.6002 31.0902 16.8533 32.0044 16.8533C32.9185 16.8533 33.6665 17.6002 33.6665 18.5131Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
        <div className="flex flex-row xs:flex-col">
          {" "}
          <SocialComponent
            link={"https://www.tiktok.com/@artistlyromania"}
            left="6.5rem"
            color="#404040"
            text="@artistly"
            svgContainer={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="50"
                viewBox="0 0 224 63"
                fill="none"
              >
                <path
                  d="M198.318 4.84285H86.3167C73.7986 4.84285 63.4437 15.1978 62.3872 28.2777C60.8361 12.892 47.84 0.876953 32.0435 0.876953C15.1989 0.876953 1.54042 14.5354 1.54042 31.38C1.54042 48.2246 15.1989 61.883 32.0435 61.883C48.8881 61.883 61.3811 49.3481 62.4627 33.4845C63.8545 46.1871 73.8908 56.1228 84.011 56.1228H196.012C211.523 56.1228 222.331 44.5857 222.331 30.4828C222.331 16.38 211.523 4.84285 198.309 4.84285H198.318Z"
                  stroke="#404040"
                  stroke-width="1.67691"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            svglogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.83"
                height="40.83"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M25.3369 50.2738C39.1132 50.2738 50.281 39.1059 50.281 25.3297C50.281 11.5535 39.1132 0.38562 25.3369 0.38562C11.5607 0.38562 0.392847 11.5535 0.392847 25.3297C0.392847 39.1059 11.5607 50.2738 25.3369 50.2738Z"
                  fill="#404040"
                />
                <path
                  d="M31.6757 12.669H26.5192V32.0877C26.5192 34.1754 25.1189 35.1229 23.0312 35.1229C20.9434 35.1229 19.2581 33.4292 19.2581 31.3498C19.2581 29.2705 20.9518 27.5768 23.0312 27.5768C23.3498 27.5768 23.66 27.6271 23.9535 27.7026V22.7557C23.6516 22.7221 23.3414 22.697 23.0312 22.697C18.252 22.697 14.3783 26.5706 14.3783 31.3498C14.3783 36.129 18.252 40.0027 23.0312 40.0027C27.5588 40.0027 31.2732 37.1855 31.6505 32.8171H31.6757V32.3895C31.6757 32.2889 31.6924 32.1799 31.6924 32.0793H31.6757V22.6886C33.973 24.617 38.2995 24.3487 38.2995 24.3487V19.2845C31.7679 19.2845 31.6757 12.6606 31.6757 12.6606V12.669Z"
                  fill="url(#paint0_linear_934_2203)"
                />
                <path
                  d="M29.6634 10.6567H24.5069V30.0753C24.5069 32.1631 23.1066 33.1106 21.0189 33.1106C18.9311 33.1106 17.2458 31.4169 17.2458 29.3375C17.2458 27.2581 18.9395 25.5645 21.0189 25.5645C21.3375 25.5645 21.6477 25.6148 21.9412 25.6902V20.7433C21.6393 20.7098 21.3291 20.6846 21.0189 20.6846C16.2397 20.6846 12.366 24.5583 12.366 29.3375C12.366 34.1167 16.2397 37.9904 21.0189 37.9904C25.5465 37.9904 29.2609 35.1732 29.6382 30.8048H29.6634V30.3772C29.6634 30.2766 29.6801 30.1676 29.6801 30.067H29.6634V20.6763C31.9607 22.6047 36.2872 22.3364 36.2872 22.3364V17.2721C29.7556 17.2721 29.6634 10.6483 29.6634 10.6483V10.6567Z"
                  fill="#6DD6C9"
                />
                <path
                  d="M30.6695 11.6628H25.513V31.0815C25.513 33.1692 24.1128 34.1167 22.025 34.1167C19.9373 34.1167 18.252 32.423 18.252 30.3436C18.252 28.2642 19.9456 26.5706 22.025 26.5706C22.3436 26.5706 22.6539 26.6209 22.9473 26.6963V21.7494C22.6455 21.7159 22.3352 21.6907 22.025 21.6907C17.2458 21.6907 13.3722 25.5644 13.3722 30.3436C13.3722 35.1228 17.2458 38.9965 22.025 38.9965C26.5527 38.9965 30.267 36.1793 30.6444 31.8109H30.6695V31.3833C30.6695 31.2827 30.6863 31.1737 30.6863 31.0731H30.6695V21.6824C32.9669 23.6108 37.2933 23.3425 37.2933 23.3425V18.2782C30.7617 18.2782 30.6695 11.6544 30.6695 11.6544V11.6628Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_934_2203"
                    x1="93.4196"
                    y1="93.3705"
                    x2="135.703"
                    y2="135.151"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5A75" />
                    <stop offset="1" stop-color="#FF0D5E" />
                  </linearGradient>
                </defs>
              </svg>
            }
          />
          <SocialComponent
            link={"https://www.threads.net/@artistlyromania"}
            extraSvg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 31 32"
                fill="none"
              >
                <g clip-path="url(#clip0_2195_3124)">
                  <path
                    d="M15.7401 31.5842H15.7312C11.1059 31.5529 7.55027 30.028 5.16121 27.0505C3.0345 24.4013 1.93818 20.715 1.90137 16.0954V16.073C1.93824 11.4523 3.0345 7.76709 5.16121 5.11792C7.54912 2.14046 11.1059 0.615471 15.73 0.584229H15.7479C19.2935 0.60766 22.2598 1.51974 24.5651 3.29261C26.732 4.95941 28.2571 7.33508 29.0988 10.3549L26.4641 11.0895C25.0386 5.97532 21.4304 3.36073 15.739 3.31943C11.9812 3.3462 9.13999 4.52734 7.2924 6.8294C5.56197 8.98517 4.66775 12.0988 4.63536 16.0831C4.66884 20.0686 5.56306 23.1823 7.2924 25.3369C9.14005 27.6389 11.9812 28.82 15.739 28.8468C19.126 28.8223 21.3679 28.033 23.2323 26.2066C25.3601 24.1222 25.321 21.5657 24.64 20.0106C24.2392 19.094 23.5112 18.3305 22.5299 17.7521C22.2833 19.496 21.7283 20.9115 20.871 21.9777C19.7278 23.4011 18.1069 24.1793 16.0549 24.2897C14.502 24.3734 13.006 24.0062 11.845 23.2549C10.4718 22.3662 9.66802 21.0064 9.58204 19.4256C9.4983 17.8884 10.1079 16.475 11.2979 15.4456C12.4356 14.4621 14.0353 13.885 15.9254 13.7789C17.3186 13.7007 18.6214 13.7622 19.826 13.9631C19.6664 13.0041 19.3427 12.2439 18.8604 11.6946C18.1972 10.9388 17.1712 10.5525 15.8126 10.5436H15.7747C14.684 10.5436 13.2025 10.8427 12.258 12.2472L9.98843 10.7211C11.2522 8.84222 13.3053 7.80844 15.7736 7.80844H15.8294C19.9567 7.83411 22.4139 10.3582 22.6584 14.7668C22.7989 14.8261 22.9364 14.8874 23.0726 14.9511C24.9984 15.8565 26.4061 17.2275 27.1451 18.9155C28.1745 21.2687 28.2694 25.1037 25.1446 28.1625C22.7577 30.5001 19.8595 31.5552 15.7479 31.5831H15.739L15.7401 31.5842ZM17.0351 16.4827C16.7225 16.4827 16.4054 16.4916 16.0816 16.5107C13.7093 16.6446 12.2312 17.7309 12.3149 19.2782C12.4032 20.8992 14.1916 21.6527 15.9097 21.5601C17.4916 21.4752 19.5504 20.8601 19.8952 16.7674C19.0221 16.581 18.0622 16.4827 17.0351 16.4827H17.0351Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2195_3124">
                    <rect
                      width="31"
                      height="31"
                      fill="white"
                      transform="translate(0 0.584229)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            left="6.5rem"
            color="#000"
            text="@artistly"
            svgContainer={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="50"
                viewBox="0 0 223 63"
                fill="none"
              >
                <path
                  d="M198.14 4.84285H86.1387C73.6205 4.84285 63.2656 15.1978 62.2091 28.2777C60.658 12.892 47.6619 0.876953 31.8654 0.876953C15.0208 0.876953 1.36237 14.5354 1.36237 31.38C1.36237 48.2246 15.0208 61.883 31.8654 61.883C48.71 61.883 61.203 49.3481 62.2846 33.4845C63.6764 46.1871 73.7128 56.1228 83.8329 56.1228H195.834C211.345 56.1228 222.153 44.5857 222.153 30.4828C222.153 16.38 211.345 4.84285 198.131 4.84285H198.14Z"
                  stroke="black"
                  stroke-width="1.67691"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            svglogo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.83"
                height="40.83"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M25.1589 50.2738C38.9351 50.2738 50.103 39.1059 50.103 25.3297C50.103 11.5535 38.9351 0.38562 25.1589 0.38562C11.3827 0.38562 0.214813 11.5535 0.214813 25.3297C0.214813 39.1059 11.3827 50.2738 25.1589 50.2738Z"
                  fill="black"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SocialContainer;
