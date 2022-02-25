import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DayJS from 'react-dayjs';

import { updateOrganizationId, updateBranchId, fetchBranches, updateEndpointIdentity, updateSetupStatus, listenAgents, fetchAgents } from '../store/actions/agentsActions';


import "../assets/css/SignIn.css"
class Setup extends React.Component {
    constructor(props){
        super()
        this.doNothing = this.doNothing.bind(this);
    }

    doNothing(e){
        e.preventDefault();
    }
    render(){
        const { updateOrganizationId, updateBranchId, updateEndpointIdentity } = this.props
        const { organizations, branches, organizationId, branchId } = this.props
        return (
            <div className="signInComponent">
                <div>
                    <svg width="87" height="91" viewBox="0 0 87 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62 18.8175C62 14.5024 58.6622 11.0019 54.5458 11.0019C51.9294 11.0019 49.6336 12.4152 48.3015 14.5487C48.187 14.5081 48.0725 14.4676 47.958 14.429C48.0153 12.8342 46.0992 12.8323 46.0992 12.8323C46.0992 12.8323 46.4027 11.9074 45.2576 11.251C43.6145 10.5173 42.3015 12.2318 42.3015 12.2318C42.3015 12.2318 42.313 11.8437 41.5534 11.8901C41.5191 11.8959 41.4866 11.9036 41.4542 11.9113C41.4084 11.921 41.3607 11.9345 41.3092 11.9557L41.3073 11.9576C40.3912 12.2994 40.5611 13.4057 40.8149 13.9173C40.105 14.0564 39.3855 14.2533 38.6718 14.5043C37.3378 12.394 35.0515 11 32.4561 11C28.3378 11 25 14.4985 25 18.8137C25 21.9782 26.7958 24.7024 29.376 25.9304C29.124 27.7414 29.1718 29.7629 29.5477 32.0103C30.437 37.3159 36.1794 42.9517 43.4313 42.9865V42.9884C43.4313 42.9884 43.4198 43 43.4332 43C43.4408 43 43.4466 43 43.4542 43C50.7443 43 56.5305 37.3217 57.4179 32.018C57.7939 29.7783 57.8168 27.7607 57.5668 25.9593C60.1775 24.7468 62 22.0033 62 18.8175Z" fill="#0A0914"/>
                        <path d="M52.11 43.9619C53.63 42.7192 56.5664 42.954 57.21 43.1816C58.0682 43.4886 58.2737 44.6555 57.5955 45.2425L52.0155 48.7955C51.1737 49.2705 50.1882 48.8479 50.0427 48.2446C49.8027 47.2439 50.5846 45.2046 52.11 43.9619Z" fill="#0A0914"/>
                        <path d="M34.9272 43.9968C33.4139 42.7474 30.4584 42.9425 29.8096 43.1609C28.9396 43.4526 28.7221 44.6035 29.3965 45.1942L34.9638 48.7846C35.8046 49.2715 36.8007 48.8616 36.9524 48.2638C37.2046 47.2794 36.4443 45.2479 34.9272 43.9968Z" fill="#0A0914"/>
                        <path d="M44 56C28.5599 56 16 43.4365 16 28.001C16 12.5616 28.5599 0 44 0C59.438 0 72 12.5616 72 28.001C72 43.4365 59.4401 56 44 56ZM44 2.59123C29.9878 2.59123 18.5893 13.9887 18.5893 28.001C18.5893 42.0113 29.9878 53.4088 44 53.4088C58.0102 53.4088 69.4067 42.0113 69.4067 28.001C69.4087 13.9887 58.0102 2.59123 44 2.59123Z" fill="#0A0914"/>
                        <path d="M12.4311 67.0012C12.8648 67.0012 13.2326 67.151 13.5323 67.4494C13.8437 67.7595 14 68.1258 14 68.546V82.4388C14 82.8706 13.8437 83.2416 13.5323 83.5518C13.2314 83.8514 12.8648 84 12.4311 84C11.6191 84 11.1184 83.6068 10.9292 82.8203C9.7611 83.6068 8.47075 84 7.05817 84H6.94183C5.02862 84 3.39276 83.3247 2.03542 81.973C0.67808 80.6213 0 78.9922 0 77.0869V73.9131C0 72.0078 0.67808 70.3787 2.03542 69.027C3.39276 67.6753 5.02862 67 6.94183 67H7.05817C8.46017 67 9.75052 67.3932 10.9292 68.1797C11.1184 67.3956 11.6191 67.0012 12.4311 67.0012ZM10.8787 73.9154C10.8787 72.8633 10.5003 71.9656 9.74347 71.2237C8.99841 70.4817 8.10291 70.1107 7.05699 70.1107H6.94065C5.88298 70.1107 4.98279 70.4817 4.23772 71.2237C3.49265 71.9656 3.12012 72.8633 3.12012 73.9154V77.0893C3.12012 78.1426 3.49265 79.039 4.23772 79.781C4.98279 80.523 5.88416 80.894 6.94065 80.894H7.05699C8.10291 80.894 8.99841 80.523 9.74347 79.781C10.5003 79.039 10.8787 78.1414 10.8787 77.0893V73.9154Z" fill="#0A0914"/>
                        <path d="M29.0261 67.2336C29.4193 67.3897 29.7013 67.662 29.8721 68.0505C30.0316 68.439 30.0417 68.8392 29.9035 69.25L24.8941 83C24.7447 83.4331 24.4582 83.7336 24.0324 83.9002H24.0167H24.001C24.001 83.912 23.9954 83.9167 23.9853 83.9167C23.9111 83.939 23.8358 83.9554 23.7617 83.9671C23.7516 83.9789 23.719 83.9836 23.6662 83.9836C23.6022 83.9953 23.5494 84 23.5067 84C23.4539 84 23.3955 83.9941 23.3314 83.9836C23.2786 83.9836 23.246 83.9777 23.2359 83.9671C23.1618 83.9566 23.0865 83.9401 23.0124 83.9167C23.0011 83.9167 22.9966 83.9108 22.9966 83.9002H22.9809H22.9652C22.5506 83.7336 22.263 83.4331 22.1035 83L17.0929 69.25C16.9548 68.8392 16.9705 68.439 17.1413 68.0505C17.3008 67.662 17.5772 67.3897 17.9704 67.2336C18.3534 67.0786 18.7309 67.0892 19.1028 67.2664C19.4859 67.4448 19.7465 67.7336 19.8847 68.1326L23.5055 78.0657L27.1107 68.1326C27.259 67.7324 27.5196 67.4437 27.8926 67.2664C28.2644 67.0892 28.4509 67 28.4509 67C28.4509 67 28.643 67.0775 29.0261 67.2336Z" fill="#0A0914"/>
                        <path d="M48 73.9227C48 74.4902 47.8555 75.013 47.5664 75.4912C46.966 76.5251 46.0707 77.0433 44.8804 77.0433L37.1219 77.0597C37.1219 78.1171 37.4944 79.0171 38.2394 79.762C38.9843 80.5069 39.8855 80.8794 40.9418 80.8794H41.0582C42.3483 80.8794 43.3776 80.3507 44.1449 79.2944C44.5902 78.6823 45.1741 78.5049 45.8968 78.761C46.3973 78.9278 46.7251 79.2615 46.8814 79.762C47.0365 80.2743 46.959 80.7408 46.6476 81.1637C45.2576 83.0554 43.394 84 41.0582 84H40.9418C39.0395 84 37.4098 83.3268 36.0527 81.9815C34.7062 80.6468 34.0223 79.0289 34 77.1267V73.9238C34 72.0111 34.678 70.3814 36.0351 69.035C37.3922 67.6779 39.0266 67 40.9407 67H41.057C42.9922 67 44.6384 67.6897 45.9955 69.069C46.6405 69.7258 47.1352 70.4766 47.4807 71.3214C47.6698 71.7772 47.8038 72.2507 47.8813 72.7395C47.9589 73.1284 47.9976 73.3235 47.9976 73.3235C47.9976 73.3235 48 73.522 48 73.9227ZM37.1219 73.9391H44.864C44.8522 72.8934 44.4797 71.9923 43.7465 71.2368C42.9898 70.4919 42.0945 70.1194 41.0605 70.1194H40.9442C39.8879 70.1194 38.9867 70.4919 38.2417 71.2368C37.4968 71.9817 37.1243 72.877 37.1243 73.9227V73.9391H37.1219Z" fill="#0A0914"/>
                        <path d="M57.5277 67.034C57.9347 67.034 58.2798 67.1898 58.5611 67.5002C58.8533 67.8001 59 68.1656 59 68.5979C59 69.0301 58.8533 69.3968 58.5611 69.6955C58.2787 69.9954 57.9347 70.1442 57.5277 70.1442H57.5123C56.5197 70.1442 55.6749 70.5214 54.9757 71.2758C54.2765 72.0185 53.9269 72.9111 53.9269 73.9537V82.4373C53.9269 82.8696 53.7858 83.2409 53.5046 83.5513C53.2123 83.8512 52.8671 84 52.4712 84C52.0642 84 51.7135 83.8501 51.4224 83.5513C51.1401 83.2409 51 82.8696 51 82.4373V68.5639C51 68.1316 51.1412 67.765 51.4224 67.4662C51.7146 67.1558 52.0642 67 52.4712 67C52.8153 67 53.1186 67.116 53.3799 67.3491C53.6413 67.5717 53.8133 67.8598 53.8972 68.2136C54.9824 67.4264 56.1889 67.0328 57.5145 67.0328H57.5277V67.034Z" fill="#0A0914"/>
                        <path d="M65.5061 61.4389C65.7883 61.7434 65.9283 62.103 65.9283 62.5155V77.2154C65.9283 78.2494 66.2778 79.1295 66.9768 79.858C67.6759 80.5864 68.5215 80.9506 69.5127 80.9506H69.5281C69.9349 80.9506 70.28 81.0977 70.5612 81.3907C70.8534 81.6952 71 82.0548 71 82.4673C71 82.8912 70.8534 83.2555 70.5612 83.5599C70.2789 83.8541 69.9349 84 69.5281 84H69.5127C67.7178 84 66.183 83.337 64.9096 82.01C63.6362 80.6829 63 79.0836 63 77.2131V62.5166C63 62.103 63.1411 61.7445 63.4223 61.4401C63.7144 61.1459 64.0639 61 64.4708 61C64.8699 60.9989 65.2139 61.1459 65.5061 61.4389Z" fill="#0A0914"/>
                        <path d="M86.026 68.1057C86.4193 68.2576 86.7013 68.5226 86.8721 68.9006C87.0316 69.29 87.0417 69.6794 86.9035 70.0677L79.3893 90.0313C79.2399 90.4207 78.9747 90.7017 78.5916 90.8741C78.2186 91.0363 77.8422 91.042 77.4591 90.8901C77.0759 90.7496 76.7996 90.4847 76.6299 90.0952C76.4591 89.7172 76.449 89.3335 76.5984 88.9441L78.8961 82.8948L74.093 70.0677C73.9548 69.6783 73.9705 69.2889 74.1413 68.9006C74.3008 68.5226 74.5772 68.2576 74.9704 68.1057C75.3536 67.955 75.7311 67.9653 76.103 68.1377C76.4861 68.3113 76.7468 68.5922 76.8849 68.9805L80.5061 78.6454L84.1115 68.9805C84.2599 68.5911 84.5205 68.3101 84.8935 68.1377C85.2654 67.9653 85.6429 67.955 86.026 68.1057Z" fill="#0A0914"/>
                    </svg>

                    <svg width="161" height="36" viewBox="0 0 161 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53.6445 21.2695C53.6445 20.7161 53.4492 20.293 53.0586 20C52.668 19.7005 51.9648 19.388 50.9492 19.0625C49.9336 18.7305 49.1296 18.4049 48.5371 18.0859C46.9225 17.2135 46.1152 16.0384 46.1152 14.5605C46.1152 13.7923 46.3301 13.1087 46.7598 12.5098C47.196 11.9043 47.8177 11.4323 48.625 11.0938C49.4388 10.7552 50.3503 10.5859 51.3594 10.5859C52.375 10.5859 53.2799 10.7715 54.0742 11.1426C54.8685 11.5072 55.4837 12.0247 55.9199 12.6953C56.3626 13.3659 56.584 14.1276 56.584 14.9805H53.6543C53.6543 14.3294 53.4492 13.8249 53.0391 13.4668C52.6289 13.1022 52.0527 12.9199 51.3105 12.9199C50.5944 12.9199 50.0378 13.0729 49.6406 13.3789C49.2435 13.6784 49.0449 14.0755 49.0449 14.5703C49.0449 15.0326 49.276 15.4199 49.7383 15.7324C50.207 16.0449 50.8939 16.3379 51.7988 16.6113C53.4655 17.1126 54.6797 17.7344 55.4414 18.4766C56.2031 19.2188 56.584 20.1432 56.584 21.25C56.584 22.4805 56.1185 23.4473 55.1875 24.1504C54.2565 24.847 53.0033 25.1953 51.4277 25.1953C50.334 25.1953 49.3379 24.9967 48.4395 24.5996C47.541 24.196 46.8542 23.6458 46.3789 22.9492C45.9102 22.2526 45.6758 21.4453 45.6758 20.5273H48.6152C48.6152 22.0964 49.5527 22.8809 51.4277 22.8809C52.1243 22.8809 52.668 22.7409 53.0586 22.4609C53.4492 22.1745 53.6445 21.7773 53.6445 21.2695ZM63.2539 25.1953C61.7044 25.1953 60.4414 24.7201 59.4648 23.7695C58.4948 22.819 58.0098 21.5527 58.0098 19.9707V19.6973C58.0098 18.6361 58.2148 17.6888 58.625 16.8555C59.0352 16.0156 59.6146 15.3711 60.3633 14.9219C61.1185 14.4661 61.9779 14.2383 62.9414 14.2383C64.3867 14.2383 65.5228 14.694 66.3496 15.6055C67.1829 16.5169 67.5996 17.8092 67.5996 19.4824V20.6348H60.8711C60.9622 21.3249 61.2357 21.8783 61.6914 22.2949C62.1536 22.7116 62.7363 22.9199 63.4395 22.9199C64.5267 22.9199 65.3763 22.526 65.9883 21.7383L67.375 23.291C66.9518 23.89 66.3789 24.3587 65.6562 24.6973C64.9336 25.0293 64.1328 25.1953 63.2539 25.1953ZM62.9316 16.5234C62.3717 16.5234 61.916 16.7122 61.5645 17.0898C61.2194 17.4674 60.998 18.0078 60.9004 18.7109H64.8262V18.4863C64.8132 17.8613 64.6439 17.3796 64.3184 17.041C63.9928 16.696 63.5306 16.5234 62.9316 16.5234ZM72.5898 11.8359V14.4336H74.3965V16.5039H72.5898V21.7773C72.5898 22.168 72.6647 22.4479 72.8145 22.6172C72.9642 22.7865 73.2507 22.8711 73.6738 22.8711C73.9863 22.8711 74.263 22.8483 74.5039 22.8027V24.9414C73.9505 25.1107 73.3809 25.1953 72.7949 25.1953C70.8158 25.1953 69.8066 24.196 69.7676 22.1973V16.5039H68.2246V14.4336H69.7676V11.8359H72.5898ZM82.2969 23.9258C81.6003 24.7721 80.6367 25.1953 79.4062 25.1953C78.2734 25.1953 77.4076 24.8698 76.8086 24.2188C76.2161 23.5677 75.9134 22.6139 75.9004 21.3574V14.4336H78.7227V21.2598C78.7227 22.36 79.224 22.9102 80.2266 22.9102C81.1836 22.9102 81.8411 22.5781 82.1992 21.9141V14.4336H85.0312V25H82.375L82.2969 23.9258ZM96.6719 19.8145C96.6719 21.4421 96.3008 22.7474 95.5586 23.7305C94.8229 24.707 93.8268 25.1953 92.5703 25.1953C91.5026 25.1953 90.64 24.8242 89.9824 24.082V29.0625H87.1602V14.4336H89.7773L89.875 15.4688C90.5586 14.6484 91.4505 14.2383 92.5508 14.2383C93.8529 14.2383 94.8652 14.7201 95.5879 15.6836C96.3105 16.6471 96.6719 17.9753 96.6719 19.668V19.8145ZM93.8496 19.6094C93.8496 18.6263 93.6738 17.8678 93.3223 17.334C92.9772 16.8001 92.4727 16.5332 91.8086 16.5332C90.9232 16.5332 90.3145 16.8717 89.9824 17.5488V21.875C90.3275 22.5716 90.9427 22.9199 91.8281 22.9199C93.1758 22.9199 93.8496 21.8164 93.8496 19.6094ZM111.623 22.0703H106.486L105.51 25H102.395L107.688 10.7812H110.402L115.725 25H112.609L111.623 22.0703ZM107.277 19.6973H110.832L109.045 14.375L107.277 19.6973ZM116.457 19.6387C116.457 18.0176 116.841 16.7122 117.609 15.7227C118.384 14.7331 119.426 14.2383 120.734 14.2383C121.893 14.2383 122.795 14.6354 123.439 15.4297L123.557 14.4336H126.115V24.6484C126.115 25.5729 125.904 26.377 125.48 27.0605C125.064 27.7441 124.475 28.265 123.713 28.623C122.951 28.9811 122.059 29.1602 121.037 29.1602C120.262 29.1602 119.507 29.0039 118.771 28.6914C118.036 28.3854 117.479 27.9883 117.102 27.5L118.352 25.7812C119.055 26.569 119.908 26.9629 120.91 26.9629C121.659 26.9629 122.242 26.7611 122.658 26.3574C123.075 25.9603 123.283 25.3939 123.283 24.6582V24.0918C122.632 24.8275 121.776 25.1953 120.715 25.1953C119.445 25.1953 118.417 24.7005 117.629 23.7109C116.848 22.7148 116.457 21.3965 116.457 19.7559V19.6387ZM119.279 19.8438C119.279 20.8008 119.471 21.5527 119.855 22.0996C120.24 22.64 120.767 22.9102 121.438 22.9102C122.297 22.9102 122.912 22.5879 123.283 21.9434V17.5C122.906 16.8555 122.297 16.5332 121.457 16.5332C120.78 16.5332 120.246 16.8099 119.855 17.3633C119.471 17.9167 119.279 18.7435 119.279 19.8438ZM133.156 25.1953C131.607 25.1953 130.344 24.7201 129.367 23.7695C128.397 22.819 127.912 21.5527 127.912 19.9707V19.6973C127.912 18.6361 128.117 17.6888 128.527 16.8555C128.938 16.0156 129.517 15.3711 130.266 14.9219C131.021 14.4661 131.88 14.2383 132.844 14.2383C134.289 14.2383 135.425 14.694 136.252 15.6055C137.085 16.5169 137.502 17.8092 137.502 19.4824V20.6348H130.773C130.865 21.3249 131.138 21.8783 131.594 22.2949C132.056 22.7116 132.639 22.9199 133.342 22.9199C134.429 22.9199 135.279 22.526 135.891 21.7383L137.277 23.291C136.854 23.89 136.281 24.3587 135.559 24.6973C134.836 25.0293 134.035 25.1953 133.156 25.1953ZM132.834 16.5234C132.274 16.5234 131.818 16.7122 131.467 17.0898C131.122 17.4674 130.9 18.0078 130.803 18.7109H134.729V18.4863C134.715 17.8613 134.546 17.3796 134.221 17.041C133.895 16.696 133.433 16.5234 132.834 16.5234ZM141.711 14.4336L141.799 15.6543C142.554 14.7103 143.566 14.2383 144.836 14.2383C145.956 14.2383 146.789 14.5671 147.336 15.2246C147.883 15.8822 148.163 16.8652 148.176 18.1738V25H145.354V18.2422C145.354 17.6432 145.223 17.2103 144.963 16.9434C144.702 16.6699 144.27 16.5332 143.664 16.5332C142.87 16.5332 142.274 16.8717 141.877 17.5488V25H139.055V14.4336H141.711ZM153.703 11.8359V14.4336H155.51V16.5039H153.703V21.7773C153.703 22.168 153.778 22.4479 153.928 22.6172C154.077 22.7865 154.364 22.8711 154.787 22.8711C155.1 22.8711 155.376 22.8483 155.617 22.8027V24.9414C155.064 25.1107 154.494 25.1953 153.908 25.1953C151.929 25.1953 150.92 24.196 150.881 22.1973V16.5039H149.338V14.4336H150.881V11.8359H153.703Z" fill="#0A0914"/>
                        <path d="M18 36C8.0749 36 0 27.9251 0 18C0 8.0749 8.0749 0 18 0C27.9251 0 36 8.0749 36 18C36 27.9251 27.9251 36 18 36ZM18 2.76923C9.60577 2.76923 2.76923 9.60577 2.76923 18C2.76923 26.3942 9.60577 33.2308 18 33.2308C26.3942 33.2308 33.2308 26.3986 33.2308 18C33.2308 9.60144 26.3986 2.76923 18 2.76923Z" fill="#0081FF"/>
                        <path d="M23.7386 20.6579C22.2522 20.6579 20.8162 19.9976 19.6946 18.7994C18.5851 17.5946 17.9218 16.0454 17.8152 14.4102C17.6896 12.6398 18.2321 11.0105 19.3426 9.82428C20.4531 8.63803 22.0053 8 23.7386 8C25.459 8 27.0163 8.65171 28.1234 9.8354C29.2305 11.0191 29.7866 12.6578 29.6611 14.4119C29.5525 16.0461 28.8894 17.5941 27.7817 18.7994C26.6592 19.9976 25.2241 20.6579 23.7386 20.6579ZM10.0834 20.9453C7.54118 20.9453 5.30561 18.5924 5.10059 15.6999C4.99552 14.2186 5.45511 12.8493 6.39649 11.8444C7.33787 10.8395 8.63633 10.3049 10.0826 10.3049C11.5288 10.3049 12.8264 10.8557 13.7618 11.8564C14.6972 12.857 15.1713 14.2357 15.0645 15.7051C14.8561 18.5933 12.6214 20.9453 10.0834 20.9453ZM31.9991 26.07C31.8633 25.668 31.5327 25.2396 30.8698 24.8333C28.8658 23.6077 26.4004 22.9594 23.7386 22.9594C21.1271 22.9594 18.5934 23.6351 16.603 24.8624C14.3606 26.2453 12.8537 28.2621 12.2464 30.6936C12.1029 31.2657 11.8936 32.3305 12.1174 32.9267C15.7091 34.2941 19.666 34.3569 23.2992 33.1039C26.9323 31.851 30.0113 29.3619 32 26.07H31.9991ZM10.0672 30.0119C10.6711 27.5992 11.9568 25.5876 13.9515 23.9609C14.0458 23.883 14.1175 23.7813 14.1591 23.6662C14.2007 23.5511 14.2108 23.427 14.1882 23.3067C14.1656 23.1864 14.1112 23.0744 14.0306 22.9823C13.9501 22.8902 13.8463 22.8215 13.7302 22.7832C12.7051 22.4557 11.5348 22.2803 10.0834 22.2803C8.0486 22.2803 5.88821 22.832 4.26258 23.8344C3.80128 24.1192 3.34853 24.2286 3 24.3261C4.39932 27.4225 6.7199 30.0105 9.64434 31.7361L9.79725 31.7242C9.83069 31.1459 9.92111 30.5724 10.0672 30.0119Z" fill="#0081FF"/>
                    </svg>

                    <br />
                    <form onSubmit={this.doNothing}>
                        <div className="select-options">
                            <label>Organization</label>
                            <div className="selectStyling">
                                <select name="counterId" value={ organizationId || '' } onChange={ (e) => updateOrganizationId(e.target. value)}>
                                    <option value=''>Select your organization</option>
                                    {
                                        organizations != null
                                        ?   organizations.map((data, index) => 
                                                <option value={data.id} key={index}>
                                                    { data.name } 
                                                </option> 
                                            )
                                        :   null
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="select-options" style={{display: organizationId != null ? "block" : "none"}}>
                            <label>Branch</label>
                            <div className="selectStyling">
                                <select name="counterId" value={ branchId || '' } onChange={ (e) => updateBranchId(e.target. value) }>
                                    <option value=''>Select your branch</option>
                                    {
                                        branches != null
                                        ?   branches.map((data, index) => 
                                                <option value={data.id} key={index}>
                                                    { data.name } 
                                                </option> 
                                            )
                                        :   null
                                    }
                                </select>
                            </div>
                        </div>
                        { 
                            organizationId != null && branchId != null
                                ? organizationId.length && branchId.length
                                    ?   <button type="submit" className="form-submit-btn" onClick={ () => updateEndpointIdentity(organizationId, branchId) }>Setup</button>
                                    :   null
                                :   null
                        }
                    </form>

                    <p className="copyright">Copyright <DayJS format="YYYY"></DayJS> Averly. Agent Management Console</p>

                </div>

                <svg width="476" height="649" viewBox="0 0 476 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M288.201 235.788C330.284 247.19 368.368 262.879 400.709 292.12C435.355 323.445 469.861 358.198 474.939 404.628C480.503 455.501 464.065 508.125 428.341 544.769C392.234 581.807 339.261 587.905 288.201 596.178C221.721 606.949 143.668 644.3 93.8689 598.961C43.9049 553.471 78.1233 472.198 77.8109 404.628C77.4959 336.484 38.9163 251.142 92.0636 208.491C145.582 165.542 221.968 217.842 288.201 235.788Z" fill="#0081FF"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M261.429 166.029C305.036 177.181 337.645 205.914 370.262 236.93C404.209 269.209 442.186 299.654 450.445 345.764C460.204 400.241 447.092 455.164 417.764 502.098C378.465 564.988 335.541 650.861 261.429 648.245C187.308 645.629 164.111 547.672 115.755 491.438C73.9021 442.767 8.67329 409.533 1.32316 345.764C-6.56953 277.287 21.0907 201.319 77.7986 162.133C130.16 125.951 199.767 150.259 261.429 166.029Z" fill="white"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="143" width="454" height="506">
                    <path fillRule="evenodd" clipRule="evenodd" d="M261.429 166.029C305.036 177.181 337.645 205.914 370.262 236.93C404.209 269.209 442.186 299.654 450.445 345.764C460.204 400.241 447.092 455.164 417.764 502.098C378.465 564.988 335.541 650.861 261.429 648.245C187.308 645.629 164.111 547.672 115.755 491.438C73.9021 442.767 8.67329 409.533 1.32316 345.764C-6.56953 277.287 21.0907 201.319 77.7986 162.133C130.16 125.951 199.767 150.259 261.429 166.029Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0)">
                    <path d="M103.628 650.59H197.866L197.866 493.152H103.628L103.628 650.59Z" fill="#B2B2B2"/>
                    <path d="M197.493 650.59H291.73V493.152H197.493V650.59Z" fill="#D1D1D1"/>
                    <path d="M205.958 344.276L217.308 398.622L181.859 403.186C181.859 403.186 178.785 346.711 181.859 346.406C184.932 346.133 205.958 344.276 205.958 344.276Z" fill="#A8754B"/>
                    <path d="M172.791 289.688C172.791 289.688 208.21 294.678 214.57 348.567C214.57 348.567 203.281 360.708 188.888 356.965L172.791 289.688Z" fill="#FFD686"/>
                    <path d="M157.424 287.831C157.424 287.831 122.918 284.423 110.777 308.736C98.6057 333.048 134.086 358.365 121.914 414.08L198.412 410.033V360.891C198.412 360.891 212.348 340.564 192.6 318.777C192.6 318.777 191.413 285.671 157.424 287.831Z" fill="#FFD686"/>
                    <path d="M271.227 421.961C271.227 421.961 296.027 412.771 302.691 436.84C309.354 460.879 336.984 618.043 336.984 618.043H314.832L301.808 555.573C301.808 555.573 283.429 535.094 277.8 491.612L200.511 482.392L271.227 421.961Z" fill="#B5845B"/>
                    <path d="M220.533 479.471C220.533 479.471 233.678 479.106 257.017 471.681C280.356 464.226 297 472.107 287.811 498.398C278.621 524.658 232.187 646.372 232.187 646.372L214.599 641.108L229.783 562.298C229.783 562.298 233.343 523.197 249.836 500.284C249.836 500.284 215.147 502.019 203.28 500.193C191.474 498.398 220.533 479.471 220.533 479.471Z" fill="#A8754B"/>
                    <path d="M121.914 414.08C121.914 414.08 93.8592 449.346 127.605 483.974C127.605 483.974 144.979 504.209 221.568 501.045C221.568 501.045 241.651 433.25 284.373 415.023L195.947 403.186L121.914 414.08Z" fill="#0C2C40"/>
                    <path d="M159.311 197.793C159.311 197.793 168.439 160.64 136.824 160.427C113.424 160.275 106.456 188.238 135.15 206.952L159.311 197.793Z" fill="#190D08"/>
                    <path d="M134.086 213.707C134.086 213.707 128.365 199.101 144.675 191.707C160.985 184.313 166.188 201.809 166.188 201.809L134.086 213.707Z" fill="#FD6C75"/>
                    <path d="M196.038 246.935C196.038 246.935 219.589 232.999 194.121 205.005C178.207 187.508 150.334 188.482 134.815 205.826C119.297 223.171 133.933 253.751 133.933 253.751L144.492 236.194L153.742 222.562L166.978 217.267L177.355 217.998L186.148 219.124L193.238 222.106L196.038 246.935Z" fill="#27160C"/>
                    <path d="M176.801 258.196L150.331 254.796L144.974 296.508L171.443 299.908L176.801 258.196Z" fill="#B5845B"/>
                    <path d="M147.565 267.201C147.565 267.201 150.426 282.385 162.628 285.458C166.431 286.401 170.569 285.306 172.882 282.172C173.521 281.32 173.977 280.346 174.13 279.251C174.708 274.869 163.145 267.201 163.145 267.201H147.565Z" fill="#A8754B"/>
                    <path d="M166.218 278.003L164.849 277.82C149.665 275.873 138.924 261.967 140.871 246.783L142.423 234.733C144.37 219.549 158.276 208.808 173.46 210.756L174.829 210.938C190.013 212.886 200.755 226.791 198.807 241.975L197.255 254.025C195.308 269.209 181.402 279.95 166.218 278.003Z" fill="#B5845B"/>
                    <path d="M143.853 243.771C143.853 243.771 162.901 237.563 162.414 216.172C162.414 216.172 163.632 200.227 146.957 214.985C130.282 229.743 143.853 243.771 143.853 243.771Z" fill="#27160C"/>
                    <path d="M148.052 249.613C147.383 254.725 142.727 258.346 137.585 257.677C132.473 257.007 128.852 252.352 129.521 247.24C130.191 242.128 134.846 238.507 139.989 239.176C145.101 239.815 148.722 244.501 148.052 249.613Z" fill="#B5845B"/>
                    <path d="M154.168 233.06L153.316 239.815C151.369 249.339 147.352 246.449 145.892 242.341L154.168 233.06Z" fill="#27160C"/>
                    <path d="M201.728 229.621C201.728 229.621 182.284 244.197 153.772 222.592C134.116 207.713 163.844 202.357 163.844 202.357L191.565 208.078L201.728 229.621Z" fill="#27160C"/>
                    <path d="M145.009 296.473C145.009 296.473 161.653 326.172 173.46 317.043C186.209 307.184 157.424 287.832 157.424 287.832L145.009 296.473Z" fill="#B5845B"/>
                    <path d="M152.373 356.965C152.373 356.965 162.658 375.922 169.687 390.802L244.663 386.481C244.663 386.481 259.543 374.309 271.197 384.594L259.695 398.409L165.822 419.192C162.232 419.983 158.489 418.948 155.842 416.453C147.535 408.603 129.46 390.315 120.697 371.662L152.373 356.965Z" fill="#B5845B"/>
                    <path d="M360.474 327.723H268.336C265.294 327.723 262.677 329.853 262.068 332.805L244.724 414.202C243.872 418.188 246.915 421.961 250.992 421.961H344.682C347.755 421.961 350.403 419.77 350.981 416.758L366.804 335.361C367.534 331.405 364.491 327.723 360.474 327.723Z" fill="#B2B2B2"/>
                    <path d="M365.769 327.723H273.631C270.588 327.723 267.971 329.853 267.363 332.805L250.018 414.202C249.166 418.188 252.209 421.961 256.287 421.961H349.976C353.05 421.961 355.697 419.77 356.275 416.758L372.098 335.361C372.828 331.405 369.816 327.723 365.769 327.723Z" fill="#D1D1D1"/>
                    <path d="M247.158 415.023H184.201C182.284 415.023 180.732 416.575 180.732 418.492C180.732 420.409 182.284 421.961 184.201 421.961H248.375L247.158 415.023Z" fill="#B2B2B2"/>
                    <path d="M308.715 372.727C308.715 378.265 313.219 382.769 318.757 382.769C324.295 382.769 328.798 378.265 328.798 372.727C328.798 367.189 324.295 362.686 318.757 362.686C313.219 362.686 308.715 367.159 308.715 372.727Z" fill="white"/>
                    <path d="M120.697 296.899C119.449 297.447 78.1577 317.743 118.78 380.639C118.78 380.639 144.736 381.065 159.767 361.742C159.798 361.742 154.807 281.928 120.697 296.899Z" fill="#FFD686"/>
                    <path d="M209.822 637.669C210.37 636.026 212.165 635.418 213.383 636.483C215.756 638.582 220.016 641.169 226.284 640.53C232.826 639.891 235.261 636.026 236.204 633.257C236.691 631.797 238.091 631.066 239.338 631.675L278.956 651.575C281.36 652.792 283.247 655.044 284.16 657.844C285.042 660.491 283.277 663.321 280.782 663.26L212.348 661.373C209.64 661.312 207.601 658.665 207.814 655.592L208.94 640.499C208.97 640.256 209.001 640.012 209.092 639.769L209.822 637.669Z" fill="#FD6C75"/>
                    <path d="M309.72 611.623C309.842 609.888 311.393 608.823 312.824 609.553C315.653 610.953 320.431 612.323 326.334 610.071C332.45 607.728 333.819 603.377 334.002 600.455C334.093 598.934 335.25 597.839 336.619 598.112L380.071 606.967C382.718 607.515 385.122 609.188 386.765 611.653C388.317 613.966 387.343 617.161 384.939 617.739L318.392 633.836C315.775 634.475 313.097 632.466 312.519 629.423L309.659 614.574C309.598 614.331 309.598 614.087 309.598 613.814L309.72 611.623Z" fill="#FD6C75"/>
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M236.027 0.0113836C257.816 -0.388375 277.923 9.76903 292.488 26.0082C308.346 43.688 320.938 66.161 316.258 89.4626C311.463 113.331 292.279 132.295 269.457 140.662C248.914 148.193 228.091 138.123 208.159 129.092C187.282 119.633 161.967 111.587 156.237 89.362C150.408 66.7554 166.562 45.4348 182.101 28.0335C196.306 12.1267 214.726 0.402199 236.027 0.0113836Z" fill="#0A0914"/>
                </svg>

            </div>
        )
    }
}

const mapStateToProps = state => {
    const { agents } = state
    return {
        setupStatus: agents.setupStatus,
        organizations: agents.organizations,
        branches: agents.branches,
        organizationId: agents.organizationId,
        branchId: agents.branchId,
        endpointIdentity: agents.endpointIdentity,
    }
}
  
export default connect(mapStateToProps, 
    { 
        updateOrganizationId,
        updateBranchId,
        updateEndpointIdentity
    }
)(Setup);

