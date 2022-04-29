import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DayJS from "react-dayjs";
import { authenticateAgent } from "../store/actions/usersActions";

import "../assets/css/SignIn.css";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appStatus: 0,
      email: "",
      password: "",
    };
    this.signIn = this.signIn.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  signIn(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { counterId } = this.props
    this.props.authenticateAgent({ email: email.toLowerCase(), password, counterId });;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // loginError
    if (prevProps.authenticationError !== this.props.authenticationError) {
      this.setState({ error: 2 });
    }
  }

  render() {

    return (
      <div className="signInComponent">
        <div>
          <svg
            width="87"
            height="91"
            viewBox="0 0 87 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62 18.8175C62 14.5024 58.6622 11.0019 54.5458 11.0019C51.9294 11.0019 49.6336 12.4152 48.3015 14.5487C48.187 14.5081 48.0725 14.4676 47.958 14.429C48.0153 12.8342 46.0992 12.8323 46.0992 12.8323C46.0992 12.8323 46.4027 11.9074 45.2576 11.251C43.6145 10.5173 42.3015 12.2318 42.3015 12.2318C42.3015 12.2318 42.313 11.8437 41.5534 11.8901C41.5191 11.8959 41.4866 11.9036 41.4542 11.9113C41.4084 11.921 41.3607 11.9345 41.3092 11.9557L41.3073 11.9576C40.3912 12.2994 40.5611 13.4057 40.8149 13.9173C40.105 14.0564 39.3855 14.2533 38.6718 14.5043C37.3378 12.394 35.0515 11 32.4561 11C28.3378 11 25 14.4985 25 18.8137C25 21.9782 26.7958 24.7024 29.376 25.9304C29.124 27.7414 29.1718 29.7629 29.5477 32.0103C30.437 37.3159 36.1794 42.9517 43.4313 42.9865V42.9884C43.4313 42.9884 43.4198 43 43.4332 43C43.4408 43 43.4466 43 43.4542 43C50.7443 43 56.5305 37.3217 57.4179 32.018C57.7939 29.7783 57.8168 27.7607 57.5668 25.9593C60.1775 24.7468 62 22.0033 62 18.8175Z"
              fill="#0A0914"
            />
            <path
              d="M52.11 43.9619C53.63 42.7192 56.5664 42.954 57.21 43.1816C58.0682 43.4886 58.2737 44.6555 57.5955 45.2425L52.0155 48.7955C51.1737 49.2705 50.1882 48.8479 50.0427 48.2446C49.8027 47.2439 50.5846 45.2046 52.11 43.9619Z"
              fill="#0A0914"
            />
            <path
              d="M34.9272 43.9968C33.4139 42.7474 30.4584 42.9425 29.8096 43.1609C28.9396 43.4526 28.7221 44.6035 29.3965 45.1942L34.9638 48.7846C35.8046 49.2715 36.8007 48.8616 36.9524 48.2638C37.2046 47.2794 36.4443 45.2479 34.9272 43.9968Z"
              fill="#0A0914"
            />
            <path
              d="M44 56C28.5599 56 16 43.4365 16 28.001C16 12.5616 28.5599 0 44 0C59.438 0 72 12.5616 72 28.001C72 43.4365 59.4401 56 44 56ZM44 2.59123C29.9878 2.59123 18.5893 13.9887 18.5893 28.001C18.5893 42.0113 29.9878 53.4088 44 53.4088C58.0102 53.4088 69.4067 42.0113 69.4067 28.001C69.4087 13.9887 58.0102 2.59123 44 2.59123Z"
              fill="#0A0914"
            />
            <path
              d="M12.4311 67.0012C12.8648 67.0012 13.2326 67.151 13.5323 67.4494C13.8437 67.7595 14 68.1258 14 68.546V82.4388C14 82.8706 13.8437 83.2416 13.5323 83.5518C13.2314 83.8514 12.8648 84 12.4311 84C11.6191 84 11.1184 83.6068 10.9292 82.8203C9.7611 83.6068 8.47075 84 7.05817 84H6.94183C5.02862 84 3.39276 83.3247 2.03542 81.973C0.67808 80.6213 0 78.9922 0 77.0869V73.9131C0 72.0078 0.67808 70.3787 2.03542 69.027C3.39276 67.6753 5.02862 67 6.94183 67H7.05817C8.46017 67 9.75052 67.3932 10.9292 68.1797C11.1184 67.3956 11.6191 67.0012 12.4311 67.0012ZM10.8787 73.9154C10.8787 72.8633 10.5003 71.9656 9.74347 71.2237C8.99841 70.4817 8.10291 70.1107 7.05699 70.1107H6.94065C5.88298 70.1107 4.98279 70.4817 4.23772 71.2237C3.49265 71.9656 3.12012 72.8633 3.12012 73.9154V77.0893C3.12012 78.1426 3.49265 79.039 4.23772 79.781C4.98279 80.523 5.88416 80.894 6.94065 80.894H7.05699C8.10291 80.894 8.99841 80.523 9.74347 79.781C10.5003 79.039 10.8787 78.1414 10.8787 77.0893V73.9154Z"
              fill="#0A0914"
            />
            <path
              d="M29.0261 67.2336C29.4193 67.3897 29.7013 67.662 29.8721 68.0505C30.0316 68.439 30.0417 68.8392 29.9035 69.25L24.8941 83C24.7447 83.4331 24.4582 83.7336 24.0324 83.9002H24.0167H24.001C24.001 83.912 23.9954 83.9167 23.9853 83.9167C23.9111 83.939 23.8358 83.9554 23.7617 83.9671C23.7516 83.9789 23.719 83.9836 23.6662 83.9836C23.6022 83.9953 23.5494 84 23.5067 84C23.4539 84 23.3955 83.9941 23.3314 83.9836C23.2786 83.9836 23.246 83.9777 23.2359 83.9671C23.1618 83.9566 23.0865 83.9401 23.0124 83.9167C23.0011 83.9167 22.9966 83.9108 22.9966 83.9002H22.9809H22.9652C22.5506 83.7336 22.263 83.4331 22.1035 83L17.0929 69.25C16.9548 68.8392 16.9705 68.439 17.1413 68.0505C17.3008 67.662 17.5772 67.3897 17.9704 67.2336C18.3534 67.0786 18.7309 67.0892 19.1028 67.2664C19.4859 67.4448 19.7465 67.7336 19.8847 68.1326L23.5055 78.0657L27.1107 68.1326C27.259 67.7324 27.5196 67.4437 27.8926 67.2664C28.2644 67.0892 28.4509 67 28.4509 67C28.4509 67 28.643 67.0775 29.0261 67.2336Z"
              fill="#0A0914"
            />
            <path
              d="M48 73.9227C48 74.4902 47.8555 75.013 47.5664 75.4912C46.966 76.5251 46.0707 77.0433 44.8804 77.0433L37.1219 77.0597C37.1219 78.1171 37.4944 79.0171 38.2394 79.762C38.9843 80.5069 39.8855 80.8794 40.9418 80.8794H41.0582C42.3483 80.8794 43.3776 80.3507 44.1449 79.2944C44.5902 78.6823 45.1741 78.5049 45.8968 78.761C46.3973 78.9278 46.7251 79.2615 46.8814 79.762C47.0365 80.2743 46.959 80.7408 46.6476 81.1637C45.2576 83.0554 43.394 84 41.0582 84H40.9418C39.0395 84 37.4098 83.3268 36.0527 81.9815C34.7062 80.6468 34.0223 79.0289 34 77.1267V73.9238C34 72.0111 34.678 70.3814 36.0351 69.035C37.3922 67.6779 39.0266 67 40.9407 67H41.057C42.9922 67 44.6384 67.6897 45.9955 69.069C46.6405 69.7258 47.1352 70.4766 47.4807 71.3214C47.6698 71.7772 47.8038 72.2507 47.8813 72.7395C47.9589 73.1284 47.9976 73.3235 47.9976 73.3235C47.9976 73.3235 48 73.522 48 73.9227ZM37.1219 73.9391H44.864C44.8522 72.8934 44.4797 71.9923 43.7465 71.2368C42.9898 70.4919 42.0945 70.1194 41.0605 70.1194H40.9442C39.8879 70.1194 38.9867 70.4919 38.2417 71.2368C37.4968 71.9817 37.1243 72.877 37.1243 73.9227V73.9391H37.1219Z"
              fill="#0A0914"
            />
            <path
              d="M57.5277 67.034C57.9347 67.034 58.2798 67.1898 58.5611 67.5002C58.8533 67.8001 59 68.1656 59 68.5979C59 69.0301 58.8533 69.3968 58.5611 69.6955C58.2787 69.9954 57.9347 70.1442 57.5277 70.1442H57.5123C56.5197 70.1442 55.6749 70.5214 54.9757 71.2758C54.2765 72.0185 53.9269 72.9111 53.9269 73.9537V82.4373C53.9269 82.8696 53.7858 83.2409 53.5046 83.5513C53.2123 83.8512 52.8671 84 52.4712 84C52.0642 84 51.7135 83.8501 51.4224 83.5513C51.1401 83.2409 51 82.8696 51 82.4373V68.5639C51 68.1316 51.1412 67.765 51.4224 67.4662C51.7146 67.1558 52.0642 67 52.4712 67C52.8153 67 53.1186 67.116 53.3799 67.3491C53.6413 67.5717 53.8133 67.8598 53.8972 68.2136C54.9824 67.4264 56.1889 67.0328 57.5145 67.0328H57.5277V67.034Z"
              fill="#0A0914"
            />
            <path
              d="M65.5061 61.4389C65.7883 61.7434 65.9283 62.103 65.9283 62.5155V77.2154C65.9283 78.2494 66.2778 79.1295 66.9768 79.858C67.6759 80.5864 68.5215 80.9506 69.5127 80.9506H69.5281C69.9349 80.9506 70.28 81.0977 70.5612 81.3907C70.8534 81.6952 71 82.0548 71 82.4673C71 82.8912 70.8534 83.2555 70.5612 83.5599C70.2789 83.8541 69.9349 84 69.5281 84H69.5127C67.7178 84 66.183 83.337 64.9096 82.01C63.6362 80.6829 63 79.0836 63 77.2131V62.5166C63 62.103 63.1411 61.7445 63.4223 61.4401C63.7144 61.1459 64.0639 61 64.4708 61C64.8699 60.9989 65.2139 61.1459 65.5061 61.4389Z"
              fill="#0A0914"
            />
            <path
              d="M86.026 68.1057C86.4193 68.2576 86.7013 68.5226 86.8721 68.9006C87.0316 69.29 87.0417 69.6794 86.9035 70.0677L79.3893 90.0313C79.2399 90.4207 78.9747 90.7017 78.5916 90.8741C78.2186 91.0363 77.8422 91.042 77.4591 90.8901C77.0759 90.7496 76.7996 90.4847 76.6299 90.0952C76.4591 89.7172 76.449 89.3335 76.5984 88.9441L78.8961 82.8948L74.093 70.0677C73.9548 69.6783 73.9705 69.2889 74.1413 68.9006C74.3008 68.5226 74.5772 68.2576 74.9704 68.1057C75.3536 67.955 75.7311 67.9653 76.103 68.1377C76.4861 68.3113 76.7468 68.5922 76.8849 68.9805L80.5061 78.6454L84.1115 68.9805C84.2599 68.5911 84.5205 68.3101 84.8935 68.1377C85.2654 67.9653 85.6429 67.955 86.026 68.1057Z"
              fill="#0A0914"
            />
          </svg>

          <svg
            width="167"
            height="36"
            viewBox="0 0 167 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.3281 22.0703H50.1914L49.2148 25H46.0996L51.3926 10.7812H54.1074L59.4297 25H56.3145L55.3281 22.0703ZM50.9824 19.6973H54.5371L52.75 14.375L50.9824 19.6973ZM60.1621 19.6387C60.1621 18.0176 60.5462 16.7122 61.3145 15.7227C62.0892 14.7331 63.1309 14.2383 64.4395 14.2383C65.5983 14.2383 66.5 14.6354 67.1445 15.4297L67.2617 14.4336H69.8203V24.6484C69.8203 25.5729 69.6087 26.377 69.1855 27.0605C68.7689 27.7441 68.1797 28.265 67.418 28.623C66.6562 28.9811 65.7643 29.1602 64.7422 29.1602C63.9674 29.1602 63.2122 29.0039 62.4766 28.6914C61.7409 28.3854 61.1842 27.9883 60.8066 27.5L62.0566 25.7812C62.7598 26.569 63.6126 26.9629 64.6152 26.9629C65.3639 26.9629 65.9466 26.7611 66.3633 26.3574C66.7799 25.9603 66.9883 25.3939 66.9883 24.6582V24.0918C66.3372 24.8275 65.4811 25.1953 64.4199 25.1953C63.1504 25.1953 62.1217 24.7005 61.334 23.7109C60.5527 22.7148 60.1621 21.3965 60.1621 19.7559V19.6387ZM62.9844 19.8438C62.9844 20.8008 63.1764 21.5527 63.5605 22.0996C63.9447 22.64 64.472 22.9102 65.1426 22.9102C66.002 22.9102 66.6172 22.5879 66.9883 21.9434V17.5C66.6107 16.8555 66.002 16.5332 65.1621 16.5332C64.485 16.5332 63.9512 16.8099 63.5605 17.3633C63.1764 17.9167 62.9844 18.7435 62.9844 19.8438ZM76.8613 25.1953C75.3118 25.1953 74.0488 24.7201 73.0723 23.7695C72.1022 22.819 71.6172 21.5527 71.6172 19.9707V19.6973C71.6172 18.6361 71.8223 17.6888 72.2324 16.8555C72.6426 16.0156 73.222 15.3711 73.9707 14.9219C74.7259 14.4661 75.5853 14.2383 76.5488 14.2383C77.9941 14.2383 79.1302 14.694 79.957 15.6055C80.7904 16.5169 81.207 17.8092 81.207 19.4824V20.6348H74.4785C74.5697 21.3249 74.8431 21.8783 75.2988 22.2949C75.7611 22.7116 76.3438 22.9199 77.0469 22.9199C78.1341 22.9199 78.9837 22.526 79.5957 21.7383L80.9824 23.291C80.5592 23.89 79.9863 24.3587 79.2637 24.6973C78.541 25.0293 77.7402 25.1953 76.8613 25.1953ZM76.5391 16.5234C75.9792 16.5234 75.5234 16.7122 75.1719 17.0898C74.8268 17.4674 74.6055 18.0078 74.5078 18.7109H78.4336V18.4863C78.4206 17.8613 78.2513 17.3796 77.9258 17.041C77.6003 16.696 77.138 16.5234 76.5391 16.5234ZM85.416 14.4336L85.5039 15.6543C86.2591 14.7103 87.2715 14.2383 88.541 14.2383C89.6608 14.2383 90.4941 14.5671 91.041 15.2246C91.5879 15.8822 91.8678 16.8652 91.8809 18.1738V25H89.0586V18.2422C89.0586 17.6432 88.9284 17.2103 88.668 16.9434C88.4076 16.6699 87.9746 16.5332 87.3691 16.5332C86.5749 16.5332 85.9792 16.8717 85.582 17.5488V25H82.7598V14.4336H85.416ZM97.4082 11.8359V14.4336H99.2148V16.5039H97.4082V21.7773C97.4082 22.168 97.4831 22.4479 97.6328 22.6172C97.7826 22.7865 98.069 22.8711 98.4922 22.8711C98.8047 22.8711 99.0814 22.8483 99.3223 22.8027V24.9414C98.7689 25.1107 98.1992 25.1953 97.6133 25.1953C95.6341 25.1953 94.625 24.196 94.5859 22.1973V16.5039H93.043V14.4336H94.5859V11.8359H97.4082ZM113.326 21.2695C113.326 20.7161 113.131 20.293 112.74 20C112.35 19.7005 111.646 19.388 110.631 19.0625C109.615 18.7305 108.811 18.4049 108.219 18.0859C106.604 17.2135 105.797 16.0384 105.797 14.5605C105.797 13.7923 106.012 13.1087 106.441 12.5098C106.878 11.9043 107.499 11.4323 108.307 11.0938C109.12 10.7552 110.032 10.5859 111.041 10.5859C112.057 10.5859 112.962 10.7715 113.756 11.1426C114.55 11.5072 115.165 12.0247 115.602 12.6953C116.044 13.3659 116.266 14.1276 116.266 14.9805H113.336C113.336 14.3294 113.131 13.8249 112.721 13.4668C112.311 13.1022 111.734 12.9199 110.992 12.9199C110.276 12.9199 109.719 13.0729 109.322 13.3789C108.925 13.6784 108.727 14.0755 108.727 14.5703C108.727 15.0326 108.958 15.4199 109.42 15.7324C109.889 16.0449 110.576 16.3379 111.48 16.6113C113.147 17.1126 114.361 17.7344 115.123 18.4766C115.885 19.2188 116.266 20.1432 116.266 21.25C116.266 22.4805 115.8 23.4473 114.869 24.1504C113.938 24.847 112.685 25.1953 111.109 25.1953C110.016 25.1953 109.02 24.9967 108.121 24.5996C107.223 24.196 106.536 23.6458 106.061 22.9492C105.592 22.2526 105.357 21.4453 105.357 20.5273H108.297C108.297 22.0964 109.234 22.8809 111.109 22.8809C111.806 22.8809 112.35 22.7409 112.74 22.4609C113.131 22.1745 113.326 21.7773 113.326 21.2695ZM121.051 25H118.219V14.4336H121.051V25ZM118.053 11.6992C118.053 11.276 118.193 10.9277 118.473 10.6543C118.759 10.3809 119.146 10.2441 119.635 10.2441C120.117 10.2441 120.501 10.3809 120.787 10.6543C121.074 10.9277 121.217 11.276 121.217 11.6992C121.217 12.1289 121.07 12.4805 120.777 12.7539C120.491 13.0273 120.11 13.1641 119.635 13.1641C119.16 13.1641 118.775 13.0273 118.482 12.7539C118.196 12.4805 118.053 12.1289 118.053 11.6992ZM122.975 19.6387C122.975 18.0176 123.359 16.7122 124.127 15.7227C124.902 14.7331 125.943 14.2383 127.252 14.2383C128.411 14.2383 129.312 14.6354 129.957 15.4297L130.074 14.4336H132.633V24.6484C132.633 25.5729 132.421 26.377 131.998 27.0605C131.581 27.7441 130.992 28.265 130.23 28.623C129.469 28.9811 128.577 29.1602 127.555 29.1602C126.78 29.1602 126.025 29.0039 125.289 28.6914C124.553 28.3854 123.997 27.9883 123.619 27.5L124.869 25.7812C125.572 26.569 126.425 26.9629 127.428 26.9629C128.176 26.9629 128.759 26.7611 129.176 26.3574C129.592 25.9603 129.801 25.3939 129.801 24.6582V24.0918C129.15 24.8275 128.294 25.1953 127.232 25.1953C125.963 25.1953 124.934 24.7005 124.146 23.7109C123.365 22.7148 122.975 21.3965 122.975 19.7559V19.6387ZM125.797 19.8438C125.797 20.8008 125.989 21.5527 126.373 22.0996C126.757 22.64 127.285 22.9102 127.955 22.9102C128.814 22.9102 129.43 22.5879 129.801 21.9434V17.5C129.423 16.8555 128.814 16.5332 127.975 16.5332C127.298 16.5332 126.764 16.8099 126.373 17.3633C125.989 17.9167 125.797 18.7435 125.797 19.8438ZM137.408 14.4336L137.496 15.6543C138.251 14.7103 139.264 14.2383 140.533 14.2383C141.653 14.2383 142.486 14.5671 143.033 15.2246C143.58 15.8822 143.86 16.8652 143.873 18.1738V25H141.051V18.2422C141.051 17.6432 140.921 17.2103 140.66 16.9434C140.4 16.6699 139.967 16.5332 139.361 16.5332C138.567 16.5332 137.971 16.8717 137.574 17.5488V25H134.752V14.4336H137.408ZM154.303 25H151.373V10.7812H154.303V25ZM159.439 14.4336L159.527 15.6543C160.283 14.7103 161.295 14.2383 162.564 14.2383C163.684 14.2383 164.518 14.5671 165.064 15.2246C165.611 15.8822 165.891 16.8652 165.904 18.1738V25H163.082V18.2422C163.082 17.6432 162.952 17.2103 162.691 16.9434C162.431 16.6699 161.998 16.5332 161.393 16.5332C160.598 16.5332 160.003 16.8717 159.605 17.5488V25H156.783V14.4336H159.439Z"
              fill="#0A0914"
            />
            <path
              d="M18 36C8.0749 36 0 27.9251 0 18C0 8.0749 8.0749 0 18 0C27.9251 0 36 8.0749 36 18C36 27.9251 27.9251 36 18 36ZM18 2.76923C9.60577 2.76923 2.76923 9.60577 2.76923 18C2.76923 26.3942 9.60577 33.2308 18 33.2308C26.3942 33.2308 33.2308 26.3986 33.2308 18C33.2308 9.60144 26.3986 2.76923 18 2.76923Z"
              fill="#0081FF"
            />
            <path
              d="M23.7386 20.6579C22.2522 20.6579 20.8162 19.9976 19.6946 18.7994C18.5851 17.5946 17.9218 16.0454 17.8152 14.4102C17.6896 12.6398 18.2321 11.0105 19.3426 9.82428C20.4531 8.63803 22.0053 8 23.7386 8C25.459 8 27.0163 8.65171 28.1234 9.8354C29.2305 11.0191 29.7866 12.6578 29.6611 14.4119C29.5525 16.0461 28.8894 17.5941 27.7817 18.7994C26.6592 19.9976 25.2241 20.6579 23.7386 20.6579ZM10.0834 20.9453C7.54118 20.9453 5.30561 18.5924 5.10059 15.6999C4.99552 14.2186 5.45511 12.8493 6.39649 11.8444C7.33787 10.8395 8.63633 10.3049 10.0826 10.3049C11.5288 10.3049 12.8264 10.8557 13.7618 11.8564C14.6972 12.857 15.1713 14.2357 15.0645 15.7051C14.8561 18.5933 12.6214 20.9453 10.0834 20.9453ZM31.9991 26.07C31.8633 25.668 31.5327 25.2396 30.8698 24.8333C28.8658 23.6077 26.4004 22.9594 23.7386 22.9594C21.1271 22.9594 18.5934 23.6351 16.603 24.8624C14.3606 26.2453 12.8537 28.2621 12.2464 30.6936C12.1029 31.2657 11.8936 32.3305 12.1174 32.9267C15.7091 34.2941 19.666 34.3569 23.2992 33.1039C26.9323 31.851 30.0113 29.3619 32 26.07H31.9991ZM10.0672 30.0119C10.6711 27.5992 11.9568 25.5876 13.9515 23.9609C14.0458 23.883 14.1175 23.7813 14.1591 23.6662C14.2007 23.5511 14.2108 23.427 14.1882 23.3067C14.1656 23.1864 14.1112 23.0744 14.0306 22.9823C13.9501 22.8902 13.8463 22.8215 13.7302 22.7832C12.7051 22.4557 11.5348 22.2803 10.0834 22.2803C8.0486 22.2803 5.88821 22.832 4.26258 23.8344C3.80128 24.1192 3.34853 24.2286 3 24.3261C4.39932 27.4225 6.7199 30.0105 9.64434 31.7361L9.79725 31.7242C9.83069 31.1459 9.92111 30.5724 10.0672 30.0119V30.0119Z"
              fill="#0081FF"
            />
          </svg>

          <form onSubmit={this.signIn}>
            <div className="input-options">
              <label>Email</label>
              <div className="selectStyling">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </div>
            <div className="input-options">
              <label>Password</label>
              <div className="selectStyling">
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </div>
            <button type="submit" className="form-submit-btn">
              Sign In
            </button>
          </form>

          <p className="copyright">
            Copyright <DayJS format="YYYY"></DayJS> Averly. Agent Management Console
          </p>
        </div>

        <svg
          width="476"
          height="649"
          viewBox="0 0 476 649"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M288.201 235.788C330.284 247.19 368.368 262.879 400.709 292.12C435.355 323.445 469.861 358.198 474.939 404.628C480.503 455.501 464.065 508.125 428.341 544.769C392.234 581.807 339.261 587.905 288.201 596.178C221.721 606.949 143.668 644.3 93.8689 598.961C43.9049 553.471 78.1233 472.198 77.8109 404.628C77.4959 336.484 38.9163 251.142 92.0636 208.491C145.582 165.542 221.968 217.842 288.201 235.788Z"
            fill="#0081FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M261.429 166.029C305.036 177.181 337.645 205.914 370.262 236.93C404.209 269.209 442.186 299.654 450.445 345.764C460.204 400.241 447.092 455.164 417.764 502.098C378.465 564.988 335.541 650.861 261.429 648.245C187.308 645.629 164.111 547.672 115.755 491.438C73.9021 442.767 8.67329 409.533 1.32316 345.764C-6.56953 277.287 21.0907 201.319 77.7986 162.133C130.16 125.951 199.767 150.259 261.429 166.029Z"
            fill="white"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="143"
            width="454"
            height="506"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M261.429 166.029C305.036 177.181 337.645 205.914 370.262 236.93C404.209 269.209 442.186 299.654 450.445 345.764C460.204 400.241 447.092 455.164 417.764 502.098C378.465 564.988 335.541 650.861 261.429 648.245C187.308 645.629 164.111 547.672 115.755 491.438C73.9021 442.767 8.67329 409.533 1.32316 345.764C-6.56953 277.287 21.0907 201.319 77.7986 162.133C130.16 125.951 199.767 150.259 261.429 166.029Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M103.628 650.59H197.866L197.866 493.152H103.628L103.628 650.59Z"
              fill="#B2B2B2"
            />
            <path
              d="M197.493 650.59H291.73V493.152H197.493V650.59Z"
              fill="#D1D1D1"
            />
            <path
              d="M205.958 344.276L217.308 398.622L181.859 403.186C181.859 403.186 178.785 346.711 181.859 346.406C184.932 346.133 205.958 344.276 205.958 344.276Z"
              fill="#A8754B"
            />
            <path
              d="M172.791 289.688C172.791 289.688 208.21 294.678 214.57 348.567C214.57 348.567 203.281 360.708 188.888 356.965L172.791 289.688Z"
              fill="#FFD686"
            />
            <path
              d="M157.424 287.831C157.424 287.831 122.918 284.423 110.777 308.736C98.6057 333.048 134.086 358.365 121.914 414.08L198.412 410.033V360.891C198.412 360.891 212.348 340.564 192.6 318.777C192.6 318.777 191.413 285.671 157.424 287.831Z"
              fill="#FFD686"
            />
            <path
              d="M271.227 421.961C271.227 421.961 296.027 412.771 302.691 436.84C309.354 460.879 336.984 618.043 336.984 618.043H314.832L301.808 555.573C301.808 555.573 283.429 535.094 277.8 491.612L200.511 482.392L271.227 421.961Z"
              fill="#B5845B"
            />
            <path
              d="M220.533 479.471C220.533 479.471 233.678 479.106 257.017 471.681C280.356 464.226 297 472.107 287.811 498.398C278.621 524.658 232.187 646.372 232.187 646.372L214.599 641.108L229.783 562.298C229.783 562.298 233.343 523.197 249.836 500.284C249.836 500.284 215.147 502.019 203.28 500.193C191.474 498.398 220.533 479.471 220.533 479.471Z"
              fill="#A8754B"
            />
            <path
              d="M121.914 414.08C121.914 414.08 93.8592 449.346 127.605 483.974C127.605 483.974 144.979 504.209 221.568 501.045C221.568 501.045 241.651 433.25 284.373 415.023L195.947 403.186L121.914 414.08Z"
              fill="#0C2C40"
            />
            <path
              d="M159.311 197.793C159.311 197.793 168.439 160.64 136.824 160.427C113.424 160.275 106.456 188.238 135.15 206.952L159.311 197.793Z"
              fill="#190D08"
            />
            <path
              d="M134.086 213.707C134.086 213.707 128.365 199.101 144.675 191.707C160.985 184.313 166.188 201.809 166.188 201.809L134.086 213.707Z"
              fill="#FD6C75"
            />
            <path
              d="M196.038 246.935C196.038 246.935 219.589 232.999 194.121 205.005C178.207 187.508 150.334 188.482 134.815 205.826C119.297 223.171 133.933 253.751 133.933 253.751L144.492 236.194L153.742 222.562L166.978 217.267L177.355 217.998L186.148 219.124L193.238 222.106L196.038 246.935Z"
              fill="#27160C"
            />
            <path
              d="M176.801 258.196L150.331 254.796L144.974 296.508L171.443 299.908L176.801 258.196Z"
              fill="#B5845B"
            />
            <path
              d="M147.565 267.201C147.565 267.201 150.426 282.385 162.628 285.458C166.431 286.401 170.569 285.306 172.882 282.172C173.521 281.32 173.977 280.346 174.13 279.251C174.708 274.869 163.145 267.201 163.145 267.201H147.565Z"
              fill="#A8754B"
            />
            <path
              d="M166.218 278.003L164.849 277.82C149.665 275.873 138.924 261.967 140.871 246.783L142.423 234.733C144.37 219.549 158.276 208.808 173.46 210.756L174.829 210.938C190.013 212.886 200.755 226.791 198.807 241.975L197.255 254.025C195.308 269.209 181.402 279.95 166.218 278.003Z"
              fill="#B5845B"
            />
            <path
              d="M143.853 243.771C143.853 243.771 162.901 237.563 162.414 216.172C162.414 216.172 163.632 200.227 146.957 214.985C130.282 229.743 143.853 243.771 143.853 243.771Z"
              fill="#27160C"
            />
            <path
              d="M148.052 249.613C147.383 254.725 142.727 258.346 137.585 257.677C132.473 257.007 128.852 252.352 129.521 247.24C130.191 242.128 134.846 238.507 139.989 239.176C145.101 239.815 148.722 244.501 148.052 249.613Z"
              fill="#B5845B"
            />
            <path
              d="M154.168 233.06L153.316 239.815C151.369 249.339 147.352 246.449 145.892 242.341L154.168 233.06Z"
              fill="#27160C"
            />
            <path
              d="M201.728 229.621C201.728 229.621 182.284 244.197 153.772 222.592C134.116 207.713 163.844 202.357 163.844 202.357L191.565 208.078L201.728 229.621Z"
              fill="#27160C"
            />
            <path
              d="M145.009 296.473C145.009 296.473 161.653 326.172 173.46 317.043C186.209 307.184 157.424 287.832 157.424 287.832L145.009 296.473Z"
              fill="#B5845B"
            />
            <path
              d="M152.373 356.965C152.373 356.965 162.658 375.922 169.687 390.802L244.663 386.481C244.663 386.481 259.543 374.309 271.197 384.594L259.695 398.409L165.822 419.192C162.232 419.983 158.489 418.948 155.842 416.453C147.535 408.603 129.46 390.315 120.697 371.662L152.373 356.965Z"
              fill="#B5845B"
            />
            <path
              d="M360.474 327.723H268.336C265.294 327.723 262.677 329.853 262.068 332.805L244.724 414.202C243.872 418.188 246.915 421.961 250.992 421.961H344.682C347.755 421.961 350.403 419.77 350.981 416.758L366.804 335.361C367.534 331.405 364.491 327.723 360.474 327.723Z"
              fill="#B2B2B2"
            />
            <path
              d="M365.769 327.723H273.631C270.588 327.723 267.971 329.853 267.363 332.805L250.018 414.202C249.166 418.188 252.209 421.961 256.287 421.961H349.976C353.05 421.961 355.697 419.77 356.275 416.758L372.098 335.361C372.828 331.405 369.816 327.723 365.769 327.723Z"
              fill="#D1D1D1"
            />
            <path
              d="M247.158 415.023H184.201C182.284 415.023 180.732 416.575 180.732 418.492C180.732 420.409 182.284 421.961 184.201 421.961H248.375L247.158 415.023Z"
              fill="#B2B2B2"
            />
            <path
              d="M308.715 372.727C308.715 378.265 313.219 382.769 318.757 382.769C324.295 382.769 328.798 378.265 328.798 372.727C328.798 367.189 324.295 362.686 318.757 362.686C313.219 362.686 308.715 367.159 308.715 372.727Z"
              fill="white"
            />
            <path
              d="M120.697 296.899C119.449 297.447 78.1577 317.743 118.78 380.639C118.78 380.639 144.736 381.065 159.767 361.742C159.798 361.742 154.807 281.928 120.697 296.899Z"
              fill="#FFD686"
            />
            <path
              d="M209.822 637.669C210.37 636.026 212.165 635.418 213.383 636.483C215.756 638.582 220.016 641.169 226.284 640.53C232.826 639.891 235.261 636.026 236.204 633.257C236.691 631.797 238.091 631.066 239.338 631.675L278.956 651.575C281.36 652.792 283.247 655.044 284.16 657.844C285.042 660.491 283.277 663.321 280.782 663.26L212.348 661.373C209.64 661.312 207.601 658.665 207.814 655.592L208.94 640.499C208.97 640.256 209.001 640.012 209.092 639.769L209.822 637.669Z"
              fill="#FD6C75"
            />
            <path
              d="M309.72 611.623C309.842 609.888 311.393 608.823 312.824 609.553C315.653 610.953 320.431 612.323 326.334 610.071C332.45 607.728 333.819 603.377 334.002 600.455C334.093 598.934 335.25 597.839 336.619 598.112L380.071 606.967C382.718 607.515 385.122 609.188 386.765 611.653C388.317 613.966 387.343 617.161 384.939 617.739L318.392 633.836C315.775 634.475 313.097 632.466 312.519 629.423L309.659 614.574C309.598 614.331 309.598 614.087 309.598 613.814L309.72 611.623Z"
              fill="#FD6C75"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M236.027 0.0113836C257.816 -0.388375 277.923 9.76903 292.488 26.0082C308.346 43.688 320.938 66.161 316.258 89.4626C311.463 113.331 292.279 132.295 269.457 140.662C248.914 148.193 228.091 138.123 208.159 129.092C187.282 119.633 161.967 111.587 156.237 89.362C150.408 66.7554 166.562 45.4348 182.101 28.0335C196.306 12.1267 214.726 0.402199 236.027 0.0113836Z"
            fill="#0A0914"
          />
        </svg>
      </div>
    );
  }
}

SignIn.propTypes = {
  authenticateAgent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { counters, agents } = state
  return {
    agents: agents.agents,
    authenticatedAgent: agents.authenticatedAgent,
    appStatus: agents.appStatus,
    authenticationError: agents.authenticationError,
    counters: counters.counters,
    counterId: counters.counterId,
  };
};

export default connect(mapStateToProps, { authenticateAgent })(
  SignIn
);
