export const upcomingAppointments = [
  {
    day: "Thursday",
    appointments: [
      { title: "Health checkup complete", time: "09:00 AM", icon: "🩺" }, 
      { title: "Ophthalmologist", time: "11:00 AM", icon: "👁️" } 
    ]
  },
  {
    day: "Saturday",
    appointments: [
      { title: "Cardiologist", time: "13:00 PM", icon: "❤️" }, 
      { title: "Neurologist", time: "15:00 PM", icon: "🧠" } 
    ]
  }
];


export const calendarWeekData = [
    {
      day: "Mon",
      date: 25,
      slots: ["10:00", "11:00", "12:00"]
    },
    {
      day: "Tues",
      date: 26,
      slots: ["08:00", "09:00","10:00"], 
      highlighted: "09:00"
    },
    {
      day: "Wed",
      date: 27,
      slots: ["12:00" ,"-","13:00"]
    },
    {
      day: "Thurs",
      date: 28,
      slots: ["10:00", "11:00"],
      highlighted: "11:00"
    },
    {
      day: "Fri",
      date: 29,
      slots: ["-","14:00", "16:00"]
    },
    {
      day: "Sat",
      date: 30,
      slots: ["12:00","14:00","15:00"]
    },
    {
      day: "Sun",
      date: 31,
      slots: ["09:00","10:00","11:00"]
    }
  ];
  
  export const calendarCards = [
    {
      icon: "🦷",
      title: "Dentist",
      time: "09:00 - 11:00",
      doctor: "Dr. Cameron Williamson",
      bgColor: "#5c3a94",
      textColor: "#ffffff"
    },
    {
      icon: "🧍",
      title: "Physiotherapy Appointment",
      time: "11:00 - 12:00",
      doctor: "Dr. Kevin Djones",
      bgColor: "#ddcdf7",
      textColor: "#523482"
    }
  ];