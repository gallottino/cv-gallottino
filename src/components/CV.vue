<script setup>
import CommonSection from './sections/CommonSection.vue';
import SideSection from './sections/SideSection.vue';
import SummarySection from './sections/SummarySection.vue';
import FourOFour from './widgets/FourOFourWidget.vue'

import cv from '../../asset/cv.json'

</script>

<template>
  <SideSection />
  <main>
    <SummarySection
      :first-name="cv.firstName"
      :last-name="cv.lastName"
      :job-title="cv.jobTitle"
      :fields="cv.fields"
    />

      <CommonSection
        title="Education"
        :list-content="cv.education"
      />
      <br>

      <CommonSection
          title="Experiences"
          :list-content="cv.experiences"
      />
      <br>

      <FourOFour />
      <h4>Thanks to <a href="https://jdan.github.io/98.css/">98.css</a></h4>
  </main>
  
</template>

<style >
  body {
      margin: 0;
      padding: 0;
      background: #c0c0c0;
  }
</style>