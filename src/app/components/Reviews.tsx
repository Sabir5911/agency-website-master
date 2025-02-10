import React from 'react'
import Section from '../lib/Section';
import TestimonialCard from '../lib/Testimonials';

let data = {
    Heading: "Reviews",
    text1: "See what our clients have to say about us.",
    text2: "We are very proud of the service we provide and stand by every product we carry. Read our testimonials from our happy customers.",
    center:true,
  
  };


  let reviews = [
    {
      name: "Sarah Johnson",
      imageString: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      review: "Their team delivered exceptional results for our website redesign. The attention to detail and creative solutions exceeded our expectations.",
      role: "Marketing Director, TechCorp"
    },
    {
      name: "Michael Chen",
      imageString: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 4,
      review: "Great experience working with this agency. They were responsive, professional, and delivered our project on time.",
      role: "Founder, StartUp Inc"
    },
    {
      name: "Emily Rodriguez",
      imageString: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      review: "The team showed incredible expertise in both design and development. Our new website has significantly improved our online presence.",
      role: "COO, Digital Solutions"
    }
  ]
  
export default function Reviews() {
  return <>
    <section className="  flex flex-col items-center justify-center text-center mt-20 py-20 lg:px-20" id="reviews">
    <Section {...data} />

    <div className='flex flex-wrap justify-around gap-5 mt-20'>
      
        {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
        ))}
    </div>

    </section>

  
  </>
}

