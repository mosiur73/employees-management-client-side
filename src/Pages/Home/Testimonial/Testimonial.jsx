// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const reviews = [
        {
          _id: 1,
          name: "Ramesh A",
          role: "Payroll Admin",
          rating: 4.5,
          details: "Get smarter and more efficient software with features designed to free you from administrative work.",
        },
        {
          _id: 2,
          name: "Anita K",
          role: "HR Manager",
          rating: 5,
          details: "The user-friendly interface and robust features make this software a must-have for HR management.",
        },
        {
          _id: 3,
          name: "Michael B",
          role: "CEO",
          rating: 4.8,
          details: "It has streamlined our operations significantly and saved us valuable time and resources.",
        },
        {
          _id: 4,
          name: "Sophia L",
          role: "Team Lead",
          rating: 4,
          details: "Good features and functionality. The customer support team is also very responsive and helpful.",
        },
        {
          _id: 5,
          name: "John D",
          role: "IT Manager",
          rating: 4.2,
          details: "Excellent software with great customization options. Slightly expensive but worth the investment.",
        },
        {
          _id: 6,
          name: "Priya S",
          role: "Operations Manager",
          rating: 4.7,
          details: "Very reliable and easy to use. It has greatly improved our productivity across departments.",
        },
        {
          _id: 7,
          name: "Rajesh K",
          role: "Finance Manager",
          rating: 4.5,
          details: "A well-designed solution that simplifies payroll processing and tax calculations.",
        },
        {
          _id: 8,
          name: "Emily C",
          role: "Consultant",
          rating: 5,
          details: "Exceptional software that is intuitive and packed with features. Highly recommend!",
        },
        {
          _id: 9,
          name: "Vikram N",
          role: "Project Manager",
          rating: 4.3,
          details: "Good software but could use some more integrations with other tools we use.",
        },
        {
          _id: 10,
          name: "Lisa M",
          role: "Recruiter",
          rating: 4.6,
          details: "The recruitment tools have helped us identify and onboard the right talent efficiently.",
        },
        {
          _id: 11,
          name: "Ajay T",
          role: "Marketing Lead",
          rating: 4.9,
          details: "It’s intuitive and has enabled us to collaborate better across teams. Amazing experience!",
        },
        {
          _id: 12,
          name: "Neha R",
          role: "Content Strategist",
          rating: 5,
          details: "Amazing product! The analytics and reporting tools are extremely helpful in making data-driven decisions.",
        },
      ];
      

    return (
     
      <div>
      <section className="my-10 bg-gray-100 py-20 px-4 md:px-10">
          <div className='pb-8'>
              <h1 className='text-lg md:text-2xl text-center text-orange-400'>What Our Clients Say</h1>
              <h1 className='text-xl md:text-3xl text-center text-orange-500'>Testimonials</h1>
          </div>
        
          <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                  640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                  },
                  1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                  },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
          >
              {
                  reviews.map(review => <SwiperSlide key={review._id}>
                      <div className='bg-gray-300 shadow-md rounded-lg p-6 w-full h-auto flex flex-col items-center text-center'>
                          <h3 className='text-lg md:text-2xl text-orange-500'>{review.name}</h3>
                          <p className="text-gray-500 text-sm md:text-base">{review.role}</p>
                          <p className="text-sm md:text-base text-black">{review.details}</p>
                          <Rating
                              style={{ maxWidth: 180 }}
                              value={review.rating}
                              readOnly
                          />
                      </div>
                  </SwiperSlide>)
              }
          </Swiper>
      </section>
  </div>
    );
};

export default Testimonial;