# Visual Studio Code command server

This is a quick and dirty prototype demonstrating how to execute commands
in a VS code extension via an HTTP request.

My goal was to be able to call VS Code commands directly from Caster
instead of trying to manipulate to fragile key bindings that might change between
users.

In light experimentation, I didn't notice that the VS Code command server was any faster 
than using keypresses, and I decided not to pursue the project further.
I am putting it up here in case it is interesting for someone else to work with.

I am not sure how this would interact with multiple VS Code windows and didn't
bother to test it. It's possible that VS Code automatically runs commands
in the currently selected window, in which case it would just work.
But it's also possible that VS Code is trying to run several instances of
the extension which would fail since is trying to run all of the servers
on a single hardcoded port.

Another alternative I thought of exploring was using a web socket connection
so that it can be talking to a different two-way communication with caster. 
That would probably have more use cases and be worth inspecting further
if the mood takes you.