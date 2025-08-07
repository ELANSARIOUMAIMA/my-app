import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import icon from './icon.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import coach1 from './coach1.png'
import coach2 from './coach2.png'
import coach3 from './coach3.png'
import coach4 from './coach4.png'
import coach5 from './coach5.png'
import coach6 from './coach6.png'
import coach7 from './coach7.png'
import coach8 from './coach8.png'
import coach9 from './coach9.png'
import coach10 from './coach10.png'
import coach11 from './coach11.png'
import coach12 from './coach12.png'
import coach13 from './coach13.png'
import coach14 from './coach14.png'
import coach15 from './coach15.png'


import A_plus from './A+.png'
import A_moins from './A-.png'
import B_plus from './B+.png'
import B_moins from './B-.png'
import O_plus from './O+.png'
import O_moins from './O-.png'
import AB_plus from './AB+.png'
import AB_moins from './AB-.png'



export const assets = {
    appointment_img,
    icon,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const bloodData = [
    {
        type: 'TypeA+',
        image: A_plus
    },
    {
        type: 'TypeA-',
        image: A_moins
    },
    {
        type: 'TypeB+',
        image: B_plus
    },
    {
        type: 'TypeB-',
        image: B_moins
    },
    {
        type: 'TypeO+',
        image: O_plus
    },
    {
        type: 'TypeO-',
        image: O_moins
    },
    {
        type: 'TypeAB+',
        image: AB_plus
    },
    {
        type: 'TypeAB-',
        image: AB_moins
    },
]

export const coaches = [
    {
        _id: 'coach1',
        name: "Dr. Sarah Nour",
        image: coach1,
        category: "Nutrition",
        type:"B+",
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sarah Nour is a nutrition specialist with deep knowledge in B+ blood type-based diets. She helps patients achieve balanced health through scientifically-backed nutrition strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach2',
        name: "Dr. Amina Khadiri",
        image: coach2,
        category: "Nutrition",
        type:"AB+,AB-",
        degree: 'MBBS',
        experience: '3 Years',
        about: 'With a focus on AB+ dietary needs, Dr. Amina Khadiri offers tailored nutrition plans that boost immunity and optimize digestion for lasting wellness.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach3',
        name: 'Dr. Sarah Zerhouni',
        image: coach3,
        type:"O-,O+,A-,A+",
        category: "Nutrition",
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Zerhouni provides personalized nutrition advice for multiple blood types, including O-, O+, A-, and A+, using integrative diet strategies for improved energy and metabolism.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach4',
        name: "Dr. Jean Patel ",
        image: coach4,
        type: "AB-,AB+",
        category: "Nutrition",
        degree: 'MBBS',
        experience: '2 Years',
        about: ' Specializing in rare blood types like AB- and AB+, Dr. Jean Patel helps patients fine-tune their dietary choices to align with unique metabolic profiles.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach5',
        name: "Dr. Rayan Belkadi",
        image: coach5,
        type: "O+,O-,AB-",
        category: "Nutrition",
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Belkadi focuses on type O-based nutrition and weight management. His evidence-driven methods support active lifestyles and digestive health.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach6',
        name: 'Coach. Andrew Williams',
        image: coach6,
        type:"AB+,O-,A-",
        category: "Fitness",
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Coach Andrew empowers fitness clients with O-, A-, and AB+ blood types through targeted workouts that align with their biological needs and energy levels. ',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach7',
        name: 'Coach. Ama Davis',
        image: coach7,
        type:"O-,O+",
        category: "Fitness",
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Ama Davis specializes in functional fitness and recovery for O+ and O- types, offering structured training plans that boost strength and endurance.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach8',
        name: 'Coach. Timothy White',
        image: coach8,
        type:"O-",
        category: "Fitness",
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Coach Timothy is a high-performance fitness expert guiding O- type individuals through customized strength and cardio programs for peak results.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach9',
        name: 'Coach. Ava Mitchell',
        image: coach9,
        type:"B+",
        category: "Fitness",
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Coach Ava designs strength and flexibility programs specifically for B+ clients, helping them improve mobility, posture, and total body health.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach10',
        name: "Coach. Safae Zen & Ahmed Mounir",
        image: coach10,
        type:"AB+,AB+",
        category: "Fitness",
        degree: 'MBBS',
        experience: '2 Years',
        about: 'This dynamic coaching duo offers evidence-based fitness regimens crafted for AB+ individuals, blending mobility training and functional strength.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach11',
        name: 'Dr. Zoe Kelly',
        image: coach11,
        type:"A-",
        category: "Psychology",
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kelly combines psychological counseling with A- blood type temperament analysis to improve emotional well-being and reduce anxiety.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach12',
        name: 'Dr. Amelia Hill',
        image: coach12,
        type:"B-",
        category: "Psychology",
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Hill offers behavioral therapy informed by B- personality markers, promoting mental clarity, emotional resilience, and positive habits.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach13',
        name: 'Dr. Chloe Evans',
        image: coach13,
        type:"AB+",
        category: "Psychology",
        degree: 'MBBS',
        experience: '4 Years',
        about: 'A mental health advocate for AB+ individuals, Dr. Evans provides emotional coaching rooted in mindfulness, empathy, and cognitive restructuring.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach14',
        name: 'Dr. Ryan Martinez',
        image: coach14,
        type:"O-,O+,A-,A+",
        category: "Psychology",
        degree: 'MBBS',
        experience: '3 Years',
        about: 'With a wide blood type range, Dr. Martinez delivers customized psychological strategies to enhance focus, manage stress, and boost confidence.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'coach15',
        name: 'Dr. Patrick Harris',
        image: coach15,
        type:"O-,A-",
        category: "Psychology",
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Harris blends cognitive behavioral methods with blood type-informed temperament support to help O- and A- individuals find balance and mental clarity.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]