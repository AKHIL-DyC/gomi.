"use client"
import React,{useEffect} from 'react'
import gsap from 'gsap'
import Drawer from '@/components/Drawer'
const page = () => {
 
  useEffect(() => {
    gsap.fromTo(
      ".text",
      { opacity: 0, scale: 0.8, fill: "transparent" },
      { opacity: 1, scale: 1.2, fill: "#d4a373", duration: 0.8, ease: "back.out(1.7)", stagger: 0.4,delay:4 }
    );
    gsap.fromTo(
      ".btn",
      {opacity:0},
      {opacity:1,delay:'5'}
    )
  }, []); // Runs once when the component mounts
    
  return (
    <div style={{display:'flex',width:'100vw',height:'100vh',backgroundColor:'#dde5b6',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <svg width="220" height="51" viewBox="0 0 120 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  style={{fill:'transparent',stroke:'white',strokeDasharray:'180',strokeDashoffset:'180',animation:'textAnimation 4s ease-in-out 1 forwards '}} d="M15.64 19.6V15.04H29.44C29.52 17.1733 29.2667 19.1867 28.68 21.08C28.12 22.9733 27.2267 24.6533 26 26.12C24.8 27.56 23.3067 28.6933 21.52 29.52C19.7333 30.3467 17.6933 30.76 15.4 30.76C13.24 30.76 11.24 30.4 9.4 29.68C7.58667 28.96 6 27.9467 4.64 26.64C3.30667 25.3333 2.26667 23.7733 1.52 21.96C0.8 20.1467 0.44 18.16 0.44 16C0.44 13.84 0.813333 11.8667 1.56 10.08C2.33333 8.26667 3.4 6.72 4.76 5.44C6.12 4.16 7.72 3.17333 9.56 2.48C11.4 1.78667 13.4 1.44 15.56 1.44C17.48 1.44 19.2 1.70667 20.72 2.24C22.2667 2.77333 23.6267 3.52 24.8 4.48C26 5.41333 27.0267 6.53333 27.88 7.84L23 10.68C22.3067 9.45333 21.3333 8.46666 20.08 7.72C18.8533 6.94667 17.3467 6.56 15.56 6.56C13.88 6.56 12.3467 6.94667 10.96 7.72C9.57333 8.46666 8.46667 9.54667 7.64 10.96C6.84 12.3733 6.44 14.0533 6.44 16C6.44 17.92 6.84 19.6133 7.64 21.08C8.44 22.52 9.52 23.64 10.88 24.44C12.2667 25.24 13.8267 25.64 15.56 25.64C16.7067 25.64 17.7333 25.4933 18.64 25.2C19.5467 24.88 20.32 24.44 20.96 23.88C21.6267 23.32 22.1867 22.68 22.64 21.96C23.0933 21.24 23.44 20.4533 23.68 19.6H15.64ZM38.5503 16C38.5503 17.7867 38.9236 19.3733 39.6703 20.76C40.417 22.1467 41.4436 23.24 42.7503 24.04C44.057 24.84 45.577 25.24 47.3103 25.24C49.0436 25.24 50.5636 24.84 51.8703 24.04C53.177 23.24 54.1903 22.1467 54.9103 20.76C55.657 19.3733 56.0303 17.7867 56.0303 16C56.0303 14.2133 55.6703 12.6267 54.9503 11.24C54.2303 9.85333 53.217 8.76 51.9103 7.96C50.6036 7.16 49.0703 6.76 47.3103 6.76C45.577 6.76 44.057 7.16 42.7503 7.96C41.4436 8.76 40.417 9.85333 39.6703 11.24C38.9236 12.6267 38.5503 14.2133 38.5503 16ZM32.5103 16C32.5103 13.8667 32.8836 11.92 33.6303 10.16C34.377 8.37333 35.417 6.82667 36.7503 5.52C38.0836 4.21333 39.6436 3.21333 41.4303 2.52C43.2436 1.8 45.2036 1.44 47.3103 1.44C49.4436 1.44 51.4036 1.8 53.1903 2.52C54.977 3.21333 56.537 4.21333 57.8703 5.52C59.2303 6.82667 60.2703 8.37333 60.9903 10.16C61.737 11.92 62.1103 13.8667 62.1103 16C62.1103 18.1067 61.737 20.0667 60.9903 21.88C60.2703 23.6667 59.2436 25.2267 57.9103 26.56C56.6036 27.8933 55.0436 28.9333 53.2303 29.68C51.4436 30.4 49.4703 30.76 47.3103 30.76C45.1503 30.76 43.1636 30.4 41.3503 29.68C39.5636 28.9333 38.0036 27.8933 36.6703 26.56C35.337 25.2267 34.3103 23.6667 33.5903 21.88C32.8703 20.0667 32.5103 18.1067 32.5103 16ZM72.6922 14.28L70.8922 30H64.9322L69.0922 0.599999L80.8122 18.68L92.5322 0.599999L96.6922 30H90.7322L88.9322 14.28L80.8122 27.4L72.6922 14.28ZM101.181 2H106.981V30H101.181V2ZM113.017 27.64C113.017 26.7333 113.323 25.9733 113.937 25.36C114.577 24.72 115.363 24.4 116.297 24.4C117.257 24.4 118.043 24.72 118.657 25.36C119.27 25.9733 119.577 26.7333 119.577 27.64C119.577 28.4933 119.27 29.24 118.657 29.88C118.043 30.52 117.257 30.84 116.297 30.84C115.363 30.84 114.577 30.52 113.937 29.88C113.323 29.24 113.017 28.4933 113.017 27.64Z" fill="white"/>
        </svg>
        <div style={{display:'flex',paddingTop:'7vh',gap:'4vw'}}>
        <svg className='text'   width="106" height="32" viewBox="0 0 106 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path style={{fill:'#d4a373'}} d="M4.48 20.6C5.06667 21.64 5.70667 22.5467 6.4 23.32C7.12 24.0933 7.90667 24.6933 8.76 25.12C9.61333 25.5467 10.5333 25.76 11.52 25.76C12.6667 25.76 13.6 25.4667 14.32 24.88C15.04 24.2933 15.4 23.4933 15.4 22.48C15.4 21.6 15.1733 20.8933 14.72 20.36C14.2933 19.8267 13.64 19.36 12.76 18.96C11.9067 18.5333 10.8533 18.08 9.6 17.6C8.93333 17.36 8.16 17.04 7.28 16.64C6.42667 16.2133 5.61333 15.68 4.84 15.04C4.06667 14.3733 3.42667 13.5733 2.92 12.64C2.41333 11.68 2.16 10.5333 2.16 9.2C2.16 7.6 2.56 6.22667 3.36 5.08C4.18667 3.90666 5.29333 3.01333 6.68 2.4C8.09333 1.76 9.66667 1.44 11.4 1.44C13.1867 1.44 14.72 1.74666 16 2.36C17.3067 2.94667 18.3867 3.70667 19.24 4.64C20.12 5.54667 20.8 6.49333 21.28 7.48L16.8 9.96C16.4267 9.29333 15.9733 8.69333 15.44 8.16C14.9333 7.6 14.3467 7.16 13.68 6.84C13.0133 6.49333 12.2533 6.32 11.4 6.32C10.28 6.32 9.44 6.58667 8.88 7.12C8.32 7.62667 8.04 8.22667 8.04 8.92C8.04 9.61333 8.26667 10.2267 8.72 10.76C9.17333 11.2667 9.86667 11.76 10.8 12.24C11.7333 12.6933 12.9067 13.16 14.32 13.64C15.2267 13.96 16.0933 14.36 16.92 14.84C17.7733 15.32 18.5333 15.9067 19.2 16.6C19.8933 17.2667 20.4267 18.0667 20.8 19C21.2 19.9067 21.4 20.96 21.4 22.16C21.4 23.52 21.1333 24.7333 20.6 25.8C20.0667 26.8667 19.3333 27.7733 18.4 28.52C17.4667 29.24 16.4133 29.7867 15.24 30.16C14.0933 30.56 12.88 30.76 11.6 30.76C9.89333 30.76 8.29333 30.44 6.8 29.8C5.33333 29.1333 4.05333 28.24 2.96 27.12C1.86667 26 1.01333 24.7867 0.4 23.48L4.48 20.6ZM45.9834 2H51.5034V31.4L31.5834 12.64V30H26.0634V0.599999L45.9834 19.36V2ZM61.4669 23.64L62.1469 19.12H75.5869L76.2669 23.64H61.4669ZM68.7869 11.08L64.5869 20.72L64.7069 22L61.0269 30H54.5869L68.7869 0.359998L82.9869 30H76.5069L72.9069 22.24L72.9869 20.8L68.7869 11.08ZM86.0244 2H91.7444V30H86.0244V2ZM89.5044 6.84V2H95.0644C97.2777 2 99.1577 2.36 100.704 3.08C102.278 3.8 103.478 4.82667 104.304 6.16C105.131 7.49333 105.544 9.08 105.544 10.92C105.544 12.7333 105.131 14.32 104.304 15.68C103.478 17.0133 102.278 18.04 100.704 18.76C99.1577 19.48 97.2777 19.84 95.0644 19.84H89.5044V15H95.0644C96.5844 15 97.7844 14.6533 98.6644 13.96C99.5444 13.2667 99.9844 12.2533 99.9844 10.92C99.9844 9.56 99.5444 8.54667 98.6644 7.88C97.7844 7.18666 96.5844 6.84 95.0644 6.84H89.5044Z" fill="white"/>
</svg>

<svg className='text' width="114" height="30" viewBox="0 0 114 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style={{fill:'#d4a373'}} d="M8.2 14.28L6.4 30H0.44L4.6 0.599999L16.32 18.68L28.04 0.599999L32.2 30H26.24L24.44 14.28L16.32 27.4L8.2 14.28ZM40.5684 23.64L41.2484 19.12H54.6884L55.3684 23.64H40.5684ZM47.8884 11.08L43.6884 20.72L43.8084 22L40.1284 30H33.6884L47.8884 0.359998L62.0884 30H55.6084L52.0084 22.24L52.0884 20.8L47.8884 11.08ZM71.4859 16.96H77.5259L86.6459 30H79.8859L71.4859 16.96ZM65.1259 2H70.8459V30H65.1259V2ZM68.6059 6.88V2H74.5259C76.7393 2 78.6193 2.37333 80.1659 3.12C81.7126 3.86666 82.8993 4.90666 83.7259 6.24C84.5526 7.57333 84.9659 9.13333 84.9659 10.92C84.9659 12.68 84.5526 14.24 83.7259 15.6C82.8993 16.9333 81.7126 17.9733 80.1659 18.72C78.6193 19.4667 76.7393 19.84 74.5259 19.84H68.6059V15.28H74.1659C75.1793 15.28 76.0459 15.12 76.7659 14.8C77.5126 14.4533 78.0859 13.9733 78.4859 13.36C78.8859 12.72 79.0859 11.96 79.0859 11.08C79.0859 10.2 78.8859 9.45333 78.4859 8.84C78.0859 8.2 77.5126 7.72 76.7659 7.4C76.0459 7.05333 75.1793 6.88 74.1659 6.88H68.6059ZM89.9306 2H95.8106V30H89.9306V2ZM105.771 2H112.571L100.971 15.12L113.171 30H106.211L94.1306 15.28L105.771 2Z" fill="white"/>
</svg>

<svg className='text'  width="128" height="32" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style={{fill:'#d4a373'}} d="M6.64 16C6.64 17.84 7.05333 19.4533 7.88 20.84C8.73333 22.2 9.84 23.2533 11.2 24C12.56 24.72 14.04 25.08 15.64 25.08C16.9733 25.08 18.16 24.9067 19.2 24.56C20.24 24.2133 21.1733 23.7467 22 23.16C22.8533 22.5733 23.5867 21.9333 24.2 21.24V27.68C23.0533 28.5867 21.8 29.2933 20.44 29.8C19.1067 30.3067 17.4133 30.56 15.36 30.56C13.2267 30.56 11.24 30.2133 9.4 29.52C7.58667 28.8267 6 27.8267 4.64 26.52C3.30667 25.2133 2.26667 23.68 1.52 21.92C0.8 20.1333 0.44 18.16 0.44 16C0.44 13.84 0.8 11.88 1.52 10.12C2.26667 8.33333 3.30667 6.78667 4.64 5.48C6 4.17333 7.58667 3.17333 9.4 2.48C11.24 1.78667 13.2267 1.44 15.36 1.44C17.4133 1.44 19.1067 1.69333 20.44 2.2C21.8 2.70666 23.0533 3.41333 24.2 4.32V10.76C23.5867 10.0667 22.8533 9.42667 22 8.84C21.1733 8.25333 20.24 7.78667 19.2 7.44C18.16 7.09333 16.9733 6.92 15.64 6.92C14.04 6.92 12.56 7.29333 11.2 8.04C9.84 8.76 8.73333 9.8 7.88 11.16C7.05333 12.52 6.64 14.1333 6.64 16ZM29.8916 2H35.6116V25H46.7716V30H29.8916V2ZM53.7278 30V25.16H67.8478V30H53.7278ZM53.7278 6.84V2H67.8478V6.84H53.7278ZM53.7278 17.52V12.76H67.0478V17.52H53.7278ZM50.0478 2H55.5678V30H50.0478V2ZM77.3653 23.64L78.0453 19.12H91.4853L92.1653 23.64H77.3653ZM84.6853 11.08L80.4853 20.72L80.6053 22L76.9253 30H70.4853L84.6853 0.359998L98.8853 30H92.4053L88.8053 22.24L88.8853 20.8L84.6853 11.08ZM121.843 2H127.363V31.4L107.443 12.64V30H101.923V0.599999L121.843 19.36V2Z" fill="white"/>
</svg>


        </div>
        <div className='btn'>
        <Drawer/>
        </div>
       

       </div>

  )
}

export default page