function set_date() {
	const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
	var month = document.getElementById("month")

	const date = new Date()
	month.innerHTML = months[date.getMonth()] + " <em>" + date.getFullYear() + "</em>"
}

function show_time() {
	var date = new Date()
	var h = date.getHours()
	var m = date.getMinutes()

	h = (h < 10) ? "0" + h : h
	m = (m < 10) ? "0" + m : m

	document.getElementById("hour").innerText = h + ":" + m
	setTimeout(show_time, 1000)
}

function toggle_navbar() {
	const toggle_button = document.querySelector(".toggle-button")
	toggle_button.addEventListener('click', function () {
		document.getElementsByTagName("nav")[0].classList.toggle('active')
	})
}

function toggle_timer() {
	const toggle_buttons = document.querySelectorAll(".timer-button")
	toggle_buttons.forEach((button, index) => {
		button.addEventListener('click', function () {
			button.classList.toggle('active')
			if (button.classList.contains('active'))
				start_timer(300)
			else
				stop_timer()
		})
	})

	document.querySelector(".restart-button").addEventListener('click', restart_timer)
}

var global_timer;

function start_timer(duration) {
	const timer_element = document.getElementById("timer")

	var date = new Date()
	date.setSeconds(date.getSeconds() + duration)
	date = date.getTime()

	global_timer = setInterval(function () {

		now = new Date().getTime()

		// Find the distance between now and the count down date
		var distance = date - now

		// Time calculations for days, hours, minutes and seconds
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		var s = Math.floor((distance % (1000 * 60)) / 1000)

		// Display the result in the element with id="demo"
		timer_element.innerHTML = ((m < 10) ? ("0" + m) : m) + ":" + ((s < 10) ? ("0" + s) : s)
	}, 1000)
}

function stop_timer() {
	clearInterval(global_timer)
}

function restart_timer() {
	document.getElementById("timer").innerHTML = "05:00"
	clearInterval(global_timer)

	var timer_button = document.querySelector(".timer-button")
	timer_button.classList.remove("active")
}

function add_checklist_item(event) {
	if (event.key == "Enter") {
		input_value = document.getElementById("checklist-input").value

		const node = document.createElement("li")
		node.innerHTML = input_value + ' <input type = "checkbox">'
		
		var checklist = document.querySelector(".checklist-content").children[0].prepend(node)
	}
}
