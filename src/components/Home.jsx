import React from 'react'
import Slider from './Slider';
import SliderData from '../SliderData';
import './Home.css';
import specImg from '../Images/spec_main_desc.jpg';

const Home = () => {

    const Sliderdates=SliderData;

  return (
    <>
      <Slider Sliderdates={Sliderdates} />  

      <section className='specialise container'>
        <div className="about-specialise">

            <div className="specialise-info">
                <h2>სპეციალიზაციის შესახებ</h2>
                <p>კიბერ უსაფრთხოების სპეციალიზაცია წარმოადგენს დღეისთვის აქტუალური საგნების სრულყოფილ სასწავლო პროგრამას. სპეციალიზაციის გავლის შემდეგ, მონაწილეებს  ექნებათ შესაძლებლობა და ყველა საჭირო უნარი იმისათვის, რომ პროფესიონალურ დონეზე გააგრძელონ მუშაობა ისეთი მოთხოვნადი მიმართულებით, როგორიც არის კიბერ უსაფრთხოება და კომპიუტერული მეცნიერება. სრული პროგრამის ხანგრძლივობა შეადგენს 12 თვეს.</p>
            </div>

            <div className="specialise-lists">
                <h5>რას ისწავლით</h5>
                <ul>
                    <li><i className="fas fa-check"></i> კიბერ უსაფრთხოების ძირითად ასპექტებს</li>
                    <li><i className="fas fa-check"></i> ქსელური უსაფრთხოების ასპექტებს</li>
                    <li><i className="fas fa-check"></i> აპარატულ უსაფრთხოებას</li>
                    <li><i className="fas fa-check"></i> კრიპტოგრაფიის ასპექტებს</li>
                    <li><i className="fas fa-check"></i> დესკტოპ და ვებ აპლიკაციების შექმნას</li>
                    <li><i className="fas fa-check"></i> ვებ უსაფრთხოებას</li>
                    <li><i className="fas fa-check"></i> პროგრამული უზრუნველყოფის უსაფრთხოებას</li>
                    <li><i className="fas fa-check"></i> ქსელური ინფრასტრუქტურის პრინციპებს</li>
                    <li><i className="fas fa-check"></i> ქსელური უსაფრთხოების პრინციპებს</li>
                    <li><i className="fas fa-check"></i> შეღწევადობის ტესტირებას</li>
                </ul>
            </div>
        </div>

        <div className="about-levels">

            <div className="levels-box">
                <div className="level-img">
                    <img src="https://scsa.ge/wp-content/uploads/2019/01/low-signal_icon.svg" alt="" />
                </div>
                <div className="level-info">
                    <h4>დამწყების დონე</h4>
                    <p>სპეციალიზაციის დაწყება შეუძლია ნებისმიერ მსურველს, სასწავლო მოდული იწყება ნულიდან</p>
                </div>
            </div>


            <div className="levels-box">
                <div className="level-img">
                    <img src="https://scsa.ge/wp-content/uploads/2019/01/subjects_icon.svg" alt="" />
                </div>
                <div className="level-info">
                    <h4>აქტუალური საგნები</h4>
                    <p>სპეციალიზაციის ფარგლებში იქნება გავლილი მხოლოდ აქტუალური კიბერ უსაფრთხოების და კომპიუტერული მეცნიერების საგნები</p>
                </div>
            </div>


            <div className="levels-box">
                <div className="level-img">
                    <img src="https://scsa.ge/wp-content/uploads/2019/01/calendar_icon.svg" alt="" />
                </div>
                <div className="level-info">
                    <h4>ოპტიმალური დრო</h4>
                    <p>თითოეული სასწავლო მოდულის ხანგრძლივობა შეადგენს 1.5 - 2 თვეს (8 საათი კვირაში), რაც სრულიად საკმარისია საგნის საფუძვლიანი შესწავლისთვის</p>
                </div>
            </div>
            

            <div className="levels-box">
                <div className="level-img">
                    <img src="https://scsa.ge/wp-content/uploads/2019/01/certificate_icon.svg" alt="" />
                </div>
                <div className="level-info">
                    <h4>სპეციალიზაციის სერტიფიკატი</h4>
                    <p>პროგრამის ყველა მოდულის წარმატებით დამთავრების შემდეგ, მიიღებთ სპეციალიზაციის ოფიციალურ სერტიფიკატს</p>
                </div>
            </div>


        </div>
      </section>


      <section className="working-specialise container">

        <div className="specialise-container">
            <h2>როგორ მუშაობს სპეციალიზაცია</h2>

            <div className="specialise-box">
                <h3>სასწავლო კურსების გავლა</h3>
                <p>სპეციალიზაცია მოიცავს განსხვავებულ სასწავლო კურსებს. თითოეული კურსის გავლის შემდეგ, სტუდენტი იძენს საჭირო უნარ-ჩვევებს კონკრეტული მიმართულებით. ზოგი ერთი კურსი წარმოადგენს სპეციალიზაციის სხვა კურსის გაგრძელებას, რაც სტუდენტებს აძლევს სიღრმისეულ და პრაქტიკულ ცოდნას.</p>
            </div>

            <div className="specialise-box">
                <h3>სერტიფიკატის მიღება</h3>
                <p>სპეციალიზაციის წარმატებით გავლის შემდეგ, სტუდენტი მიიღებს სამეცნიერო კიბერ უსაფრთხოების ასოციაციის ოფიციალურ სერტიფიკატს, რაც იქნება სტუდენტის საფუძვლიანი ცოდნის დამადასტურებელი.</p>
            </div>

        </div>

        <div className="specialise-img">
            <img src={specImg} alt="" />
        </div>

      </section>


      <section className='specific-course container'>

        

      </section>
      
    </>
  )
}

export default Home
