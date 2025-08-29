1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: এই মেথড দিয়ে Html এর ভিতর থেকে একটি ইউনিক নাম এর এলিমেন্ট জাভাস্ক্রিপ্ট এ নিয়ে আসা হয় এবং বিভিন্ন কার্যক্রম করা হয়।

getElementByClassName: এই মেথড দিয়ে Html এর ভিতর থেকে একটি একাধিক  নাম এর এলিমেন্ট জাভাস্ক্রিপ্ট এ নিয়ে আসা হয় এবং বিভিন্ন কার্যক্রম করা হয়।

querySelector:  এটি ক্লাস নেম থেকে ডিফাইন করা যে ক্লাস পাবে শুধু সেই ক্লাসকেই নিয়ে আসবে।

querySelectorAll : এটি ক্লাস নেইম থেকে ডিফাইন করা সকল ক্লাস কে এরে লাইক অবজেক্ট হিসেবে দেখাবে


2: How do you create and insert a new element into the DOM?
document object model(dom).
ডম ক্রিয়েট করার জন্য document.createElment( " what you want to create" ); এই মেথড ব্যবহার করা হয় এবং পরবর্তীতে তা insert করার জন্য append মেথড ব্যাবহার করা হয়।


3: What is Event Bubbling and how does it work?
Event bubbling কে গাছের ডাল এর মতো বলা যেতে পারে. like a tree. একটি  html এলিমেন্ট অন্য আরেকটির সাথে কোনো না কোনো ভাবে জড়িত. একটি এলিমেন্ট কে ধরে অন্য আরেকটি এলিমেন্ট কে খোজার জন্য event bubbling প্রয়োজনীয়। 


4: What is Event Delegation in JavaScript? Why is it useful?
Event delegation একি পেরেন্ট নোড যা পেরেন্ট এর children কে টার্গেট করতে সাহায্য করে থাকে।
কোড এর পারফর্মেন্স বাড়ায়
কোড ছোট হয় এবং 
ডাইনামিক সাপোর্ট করে।


5: What is the difference between preventDefault() and stopPropagation() methods?
কোনো ফর্ম কে ব্রাউজার এ রিলোড না হতে দেওয়া হচ্ছে preventDefault() মেথড এর কাজ।
ব্রাউজার এর যে কোনো একশন কে বন্ধ করতে stopPropagation() মেথড ব্যবহার করা হয়