import { ReviewsResponse, Review } from '@/types/campers';
import css from './DetailsLeftBottomSide.module.css';
import SvgIcon from '@/components/SvgIcon/SvgIcon';

interface DetailsLeftBottomSideProps {
  details: ReviewsResponse;
}

const DetailsLeftBottomSide = ({ details }: DetailsLeftBottomSideProps) => {
  return (
    <div className={css.container}>
      {details.map((review: Review) => (
        <div className={css.review} key={review.id}>
          <div className="flex gap-4 mb-4">
            <span className={css.imgFallback}>{review.reviewer_name[0]}</span>

            <div className="flex flex-col gap-1 align-center justify-center">
              <p className={css.reviewerName}>{review.reviewer_name}</p>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SvgIcon
                    key={index}
                    name="rating"
                    width={16}
                    height={16}
                    className={
                      index < review.reviewer_rating
                        ? 'fill-(--rating)'
                        : 'fill-(--gray-light)'
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsLeftBottomSide;
