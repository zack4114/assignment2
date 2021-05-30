import Vincentchasegreen from './assets/images/vincentchasegreen.png'
import VCBlackGrey from './assets/images/vcblackgrey.png';
import VCGoldenBrown from './assets/images/vcgoldenbrown.png';
import headerImage from './assets/images/headerImage.png';
import footerImage from './assets/images/footerImage.png';
import collectionImage from './assets/images/collectionImage.png';

export const LIST_SECTION_DATA = {
    heading:'BOLD, DARING & STURDY',
    subHeading: 'These Pilots are perfect for that Grunge Look',
    listData:[
        {
            id:'1',
            avatarImage:'https://pbs.twimg.com/profile_images/1241288229728346112/5nwR-0ws_400x400.jpg',
            description:'The iron-fisted Akhandanand Tripathi\nis a millionaire carpet exporter and the\nmafia don of Mirzapur',
            itemImage:Vincentchasegreen,
            itemName:'Golden Green Full Rim',
            itemDescription:'',
        },
        {
            id:'2',
            avatarImage:'https://pbs.twimg.com/profile_images/1274880774961913856/grDvhUtG_400x400.jpg',
            description:"Akhandanand's son, Munna Tripathi\nis power hungry and will not stop at\nanything to inherit his father's legacy",
            itemImage:VCBlackGrey,
            itemName:'Black Grey Full Rim',
            itemDescription:'',
        },
        {
            id:'3',
            avatarImage:'https://images-na.ssl-images-amazon.com/images/I/71+0n7Bn1wL._RI_.jpg',
            description:"A honest cop, Maurya Saab who goes\nan extra mile to eliminate the bad and\nthe over-powering crime in the city",
            itemImage:VCGoldenBrown,
            itemName:'Golden Brown Full Rim',
            itemDescription:'',
        }        
    ]
}

export const TNC_DATA = {
    heading:'Terms & Conditions of the Contest',
    listItems: [
        {text:'20 Lucky winners everyday will be selected at random.',hrefText:'',redirectionLink:''},
        {text:'Winners will be informed within 24 hours of order placed via SMS on registered phone number and/or email on registered email ID.',hrefText:'',redirectionLink:''},
        {text:'Complementary Amazon Fire TV Stick Code will be sent to the winners on order completion. (Order Completion duration: When the order is delivered and return period of 14 days is over)',hrefText:'',redirectionLink:''},
        {text:'The coupon code is redeemable on amazon.in. To claim follow the steps sent on email to order complementary Amazon Fire TV Stick.',hrefText:'',redirectionLink:''},
        {text:'The purchase needs to be made from the Mirzapur inspired Sunglasses Collection only.',hrefText:'',redirectionLink:''},
        {text:'The offer is subject to change without any prior notice and at the sole discretion of Lenskart and Amazon.',hrefText:'',redirectionLink:''},
        {text:'Offer valid from 16th November 2018 till 23rd November 2018. Codes needs to be used before 31st December 2018.',hrefText:'',redirectionLink:''},
        {text:"In case of failure on coupon code redemption, please follow Amazon's T&C",hrefText:"Amazon's T&C",redirectionLink:''},
        {text:"For after sale service of Amazon Fire TV Stick, please follow Amazon's T&C",hrefText:"Amazon's T&C",redirectionLink:''},
    ]
}

export const CONTACT_INFO = {
    heading: 'Looking for help?',
    description: 'We are available by phone Monday to Sunday from 9 AM to 8 PM. Please feel free to call us if you have any queries.',
    contactEmail:'support@lenskart.com',
    contactNo:'99998 99998'
}

export const HEADER_DATA = {
    image: headerImage,
    description:'Shop the collection today and 20 Lucky Winners per day to win Amazon Fire TV Stick',
}

export const FOOTER_DATA = {
    image: footerImage,
}

export const COLLETION_SECTION_DATA = {
    image: collectionImage,
    description: 'Shop the Mirzapur Collection & 20 Lucky Winners per day to win Amazon Fire TV Stick.'
}