class CounterChannel < ApplicationCable::Channel

  # Init counter at 0 when the server is started
  $counter = 0

  def subscribed
    stream_from "counter_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def increment(data)
  	$counter = $counter + data['counter']
  	ActionCable.server.broadcast "counter_channel", counter: $counter
  end
end
