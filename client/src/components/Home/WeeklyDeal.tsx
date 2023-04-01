import Image from 'next/image';
import { SectionTitleWithLink } from '../utils';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const WeeklyDeal = () => {
  return (
    <>
      <SectionTitleWithLink text="sale of the week" linkLabel="Show All" />

      <div className="flex items-center overflow-x-scroll">
        <DiscountItem
          name="Premium grain-free dog food"
          description={{
            short:
              'A high-quality, all-natural dog food that is free of grains and fillers.',
          }}
          reviews={{
            count: 305,
            rating: 1.3,
          }}
          price={40.99}
          originalPrice={50.99}
        />
        <DiscountItem
          name="Catnip-filled mouse toy for cats"
          description={{
            short:
              'A fun and interactive toy for cats filled with high-quality catnip.',
          }}
          reviews={{
            count: 469,
            rating: 2.7,
          }}
          price={3.99}
          originalPrice={5.99}
        />
        <DiscountItem
          name="Interactive puzzle feeder for dogs"
          description={{
            short:
              'A puzzle feeder for dogs that challenges their problem-solving skills.',
          }}
          reviews={{
            count: 71,
            rating: 4.9,
          }}
          price={23.99}
          originalPrice={30.99}
        />
        <DiscountItem
          name="Self-grooming brush for cats"
          description={{
            short:
              'A grooming brush for cats that allows them to groom themselves.',
          }}
          reviews={{
            count: 1045,
            rating: 4.1,
          }}
          price={7.99}
          originalPrice={10.99}
        />
        <DiscountItem
          name="Sisal scratching post for cats"
          description={{
            short:
              'A sturdy and durable scratching post for cats made of natural sisal.',
          }}
          reviews={{
            count: 1032,
            rating: 3.7,
          }}
          price={40.99}
          originalPrice={45.99}
        />
      </div>
    </>
  );
};

export default WeeklyDeal;

interface Item {
  image?: string;
  name: string;
  description: {
    short: string;
    full?: string;
  };
  reviews: {
    rating: number;
    count: number;
  };
  price: number;
}

interface DiscountItem extends Item {
  originalPrice: number;
}

export const DiscountItem = (props: DiscountItem) => {
  const displayRating = (rating: number) => {
    const totalStarCt = 5;
    const fullNumber = Math.floor(rating);
    const decimal = Number((rating % 1).toFixed(1));
    const array: JSX.Element[] = [];

    Array(fullNumber)
      .fill(null)
      .map((index) => {
        array.push(
          <BsStarFill key={index} className="mr-[0.15rem] fill-amber-500" />
        );
      });

    if (fullNumber < totalStarCt) {
      // handle the decimal
      if (decimal >= 0.8) {
        array.push(<BsStarFill className="mr-[0.15rem] fill-amber-500" />);
      } else if (decimal < 0.8 && decimal > 0.2) {
        array.push(<BsStarHalf className="mr-[0.15rem] fill-amber-500" />);
      } else {
        array.push(<BsStar className="mr-[0.15rem] fill-amber-500" />);
      }

      if (totalStarCt - fullNumber > 1) {
        const missingStar = totalStarCt - fullNumber - 1;
        console.log(missingStar);

        Array(missingStar)
          .fill(null)
          .map(() => {
            array.push(<BsStar className="mr-[0.15rem] fill-amber-500" />);
          });
      }
    }

    return array;
  };

  return (
    <div className=" w-60 h-72 my-5 mr-5  shrink-0 hover:scale-110 transition-all duration-300 cursor-pointer">
      <div className="h-[50%] relative py-5">
        <Image
          src={'/images/dogfood/dogfood-front.png'}
          alt="image of dogfood"
          fill
          className="object-contain"
        />
      </div>

      <div className="p-3">
        <h3 className="font-extrabold text-[0.85rem]">{props.name}</h3>
        <p className="text-[0.7rem] my-[0.3rem] break-normal">
          {props.description.short}
        </p>
        <div className="flex items-center">
          {displayRating(props.reviews.rating)}

          <p className="text-[0.75rem] text-gray-500 ml-2">
            {props.reviews.count}
          </p>
        </div>

        <div className="flex my-2">
          <s className="text-gray-500 text-sm mr-2">${props.originalPrice}</s>
          <p className="text-red-500 text-sm font-bold">${props.price}</p>
        </div>
      </div>
    </div>
  );
};
