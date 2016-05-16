# For more coffeescript with jquery read https://css-tricks.com/jquery-coffeescript/

# Safe jQuery Closure
(($) ->

	# DOM Ready
	$ ->
		console.log "DOM is ready"

		# Call Method with No Params
		$("img").click ->
			console.log("Image was clicked")
			return

		# Call Method with One Param
		$("button").on "click", ->
			console.log("Button was clicked")
			return
		return
	return

) jQuery