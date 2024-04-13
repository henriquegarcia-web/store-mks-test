import styles from './styles.module.scss'

const ProductCardSkeleton = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__wrapper}>
        <div className={styles.product_card__image}>
          <div className={styles.product_card__image_wrapper}>
            <div className={`${styles.skeleton_image} skeleton`} />
          </div>
        </div>
        <div className={styles.product_card__main_infos}>
          <div className={`${styles.skeleton_text} skeleton`} />
          <div className={`${styles.skeleton_price} skeleton`} />
        </div>
        <div className={`${styles.skeleton_text} skeleton`} />
      </div>
      <div className={styles.product_card__cta}>
        <div className={`${styles.skeleton_button} skeleton`} />
      </div>
    </div>
  )
}

export default ProductCardSkeleton
