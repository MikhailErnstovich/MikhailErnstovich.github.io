<template>
  <div class="photo">
    <div class="photo__wrapper">
      <picture class="photo__content">
        <source 
          srcset="https://sun9-44.userapi.com/impg/KjChE6aCH5BTrPs062SbmI3iqwRZkJB-Zq3hLg/GOOac-G6m_s.jpg?size=960x1280&quality=96&sign=22f3d99e2ea19dba8e05c74d9501add7&type=album"
          media="(min-width: 1000px)"
        />
        <source 
          srcset="https://sun9-73.userapi.com/impg/IH8Z6iS59jLumyeXmMB21iFW1QAI6aanylGEQw/9JZsDXq6pGg.jpg?size=2560x1707&quality=96&sign=ad9b1d142d0050de9eaffbcba8e491cf&type=album"
          media="(min-width: 600px)"
        />
        <img 
          class="photo__img"
          src="https://sun9-76.userapi.com/impf/c845218/v845218066/6d2b9/F7G6gRu9V7w.jpg?size=1080x1080&quality=96&sign=ae20a4f2868a1c06ce0c5e414c14e8d0&type=album" 
          alt="Mikhail Makarov"
        />
      </picture>
    </div>
  </div>
</template>
<script setup lang="tsx">

</script>
<style lang="scss" scoped>
.photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      aspect-ratio: 1 / 1;
      border: 2px solid var(--bays-0);
      border-radius: 6px;
      background-color: var(--bays-0-01);
      transition: all 0.2s ease-in-out;
    }
    &::before {
      transform: translate(-60%, -60%);
    }
    &::after {
      top: 50%;
      left: 50%;
      transform: translate(-40%, -40%);
    }
    &:hover::before,
    &:hover::after {
      transform: translate(-50%, -50%);
    }
    &:hover .photo__content::before,
    &:hover .photo__content::after {
      transform: translate(-50%, -50%);
    }
  }
  &__content {
    width: 60%;
    z-index: 10;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      aspect-ratio: 1 / 1;
      border: 2px solid var(--bays-0);
      border-radius: 6px;
      z-index: -1;
      transition: all 0.2s ease-in-out;
      background-color: var(--bays-0-01);
    }
    &::before {
      transform: translate(-40%, -60%);
    }
    &::after {
      transform: translate(-60%, -40%);
    }
  }
  &__img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 6px;
    border: 2px solid var(--bays-0);
  }
}
</style>