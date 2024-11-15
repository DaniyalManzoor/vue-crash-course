<script setup lang="ts"></script>
<template>
  <section class="bg-green-50">
    <div class="m-auto px-6 py-10 container">
      <div class="gap-6 grid grid-cols-1 md:grid-cols-70/30 w-full">
        <main>
          <div class="bg-white shadow-md p-6 rounded-lg text-center md:text-left">
            <div class="mb-4 text-gray-500">Full-Time</div>
            <h1 class="mb-4 font-bold text-3xl">Senior Vue Developer</h1>
            <div class="flex justify-center md:justify-start mb-4 text-gray-500 align-middle">
              <i class="mr-2 text-lg text-orange-700 fa-location-dot fa-solid"></i>
              <p class="text-orange-700">Boston, MA</p>
            </div>
          </div>

          <div class="bg-white shadow-md mt-6 p-6 rounded-lg">
            <h3 class="mb-6 font-bold text-green-800 text-lg">Job Description</h3>

            <p class="mb-4">
              We are seeking a talented Front-End Developer to join our team in Boston, MA. The
              ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience
              working with modern JavaScript frameworks such as Vue or Angular.
            </p>

            <h3 class="mb-2 font-bold text-green-800 text-lg">Salary</h3>

            <p class="mb-4">$70k - $80K / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white shadow-md p-6 rounded-lg">
            <h3 class="mb-6 font-bold text-xl">Company Info</h3>

            <h2 class="text-2xl">NewTek Solutions</h2>

            <p class="my-2">
              NewTek Solutions is a leading technology company specializing in web development and
              digital solutions. We pride ourselves on delivering high-quality products and services
              to our clients while fostering a collaborative and innovative work environment.
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="bg-green-100 my-2 p-2 font-bold">contact@newteksolutions.com</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="bg-green-100 my-2 p-2 font-bold">555-555-5555</p>
          </div>

          <!-- Manage -->
          <div class="bg-white shadow-md mt-6 p-6 rounded-lg">
            <h3 class="mb-6 font-bold text-xl">Manage Job</h3>
            <a
              href="add-job.html"
              class="block bg-green-500 hover:bg-green-600 focus:shadow-outline mt-4 px-4 py-2 rounded-full w-full font-bold text-center text-white focus:outline-none"
              >Edit Job</a
            >
            <button
              class="block bg-red-500 hover:bg-red-600 focus:shadow-outline mt-4 px-4 py-2 rounded-full w-full font-bold text-white focus:outline-none"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
