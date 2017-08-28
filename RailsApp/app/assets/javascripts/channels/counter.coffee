App.counter = App.cable.subscriptions.create "CounterChannel",
  connected: ->
    # Called when the subscription is ready for use on the server
    # Call the increment event, without incrementing any value
  	App.counter.increment(0)	

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    # Update the interface with the new value
  	document.getElementById("counter").innerHTML = "Clicks Counter: " + data.counter;	

  increment: (counter)->
    @perform 'increment', counter: counter

$(document).on 'click', '[data-behavior~=button_incrementer]', (event) -> 
  # Call the increment event, incrementing one value
  App.counter.increment(1)