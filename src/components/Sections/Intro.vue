<template>
  <section class="section intro">
    <span class="intro__hello">{{ $t('intro.hello') }}</span>
    <h1 class="intro__title big-title">{{ $t('intro.title') }}</h1>
    <h2 class="intro__subtitle big-title">
      {{ $t('intro.subtitle') }}
    </h2>
    <p class="section__paragraph">
      <span class="intro__text-1">{{ $t('intro.text-1') }}</span>
      <span class="intro__text-2">{{ $t('intro.text-2') }}</span>
    </p>
    <Resume />
  </section>
</template>
<script setup lang="tsx"></script>
<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  .big-title {
    font-family: var(--font-medium);
    letter-spacing: 2px;
    font-size: clamp(var(--fz-h-sm), 1.6359rem + 1.5534vw, var(--fz-h-lg));
    line-height: clamp(var(--lh-h-xs), 0.8932rem + 2.589vw, var(--lh-h-lg));
  }
  h1 {
    margin: 0 0 0.5rem;
  }
  h2 {
    margin: 0 0 clamp(var(--s-sm), 1.379rem + 0.518vw, var(--s-md));
    color: rgba(0, 0, 0, 0.8);
    i {
      font-style: normal;
    }
    sup {
      font-size: 0.5em;
      color: var(--bays-1);
    }
  }
  @include md-screen {
    &__paragraph {
      width: 80%;
    }
    .big-title {
      letter-spacing: 3px;
    }
  }
  @include lg-screen {
    .big-title {
      letter-spacing: 4px;
    }
  }
  @include xl-screen {
    .big-title {
      letter-spacing: 5px;
    }
  }
}
.intro {
  &__resume {
    display: flex;
    flex-direction: row;
    width: max-content;
    margin: clamp(var(--s-lg), 2.757rem + 1.036vw, var(--s-xl)) 0 0;
    padding: clamp(1rem, 0.939rem + 0.259vw, 1.25rem)
      clamp(1.5rem, 1.379rem + 0.518vw, 2rem);
    border-radius: 100px;
    background-color: var(--bays-1);
    font-size: clamp(0.875rem, 0.814rem + 0.259vw, 1.125rem);
    line-height: clamp(1.25rem, 1.068rem + 0.777vw, 2rem);
    text-transform: uppercase;
    color: #ffffff;
    transition: background-color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
      background-color: var(--primary-color);
    }
    &:active {
      background-color: var(--bays-3);
    }
    &-wrapper {
      display: flex;
      flex-direction: row;
      gap: calc(var(--s-xss) / 2);
      border-radius: 100px;
    }
    &-link {
      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:nth-child(2) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  &__resume_visible {
    padding: 0;
    background-color: transparent;
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
  }

  &__hello {
    display: block;
    margin: 0 0 clamp(var(--s-xss), 0.379rem + 0.518vw, var(--s-xs));
    font-family: var(--font-regular);
    font-size: clamp(var(--fz-md), 0.7573rem + 1.0356vw, var(--fz-h-sm));
    line-height: clamp(var(--lh-md), 0.8932rem + 2.589vw, var(--lh-h-sm));
    color: var(--bays-1);
    letter-spacing: 2px;
  }
}
.dark {
  .section {
    h2 {
      color: var(--boulders-2);
      sup: {
        color: var(--bays-0);
      }
    }
  }
  .intro__hello {
    color: var(--bays-0);
  }
}
</style>
