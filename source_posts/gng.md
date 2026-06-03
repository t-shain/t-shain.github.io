# GNG
I just made a program to send a message to my group-chat full of friends. Every night at 8:31pm it will send the message `gng`. I am interested to see how quickly they will notice the message. My friends has an alarm on his Iphone that he refuses to turn off for the time 8:31pm. I used this python code to do it.

```python
import subprocess

GROUP_CHAT_NAME = "Name"
MESSAGE = "gng"

script = f'''
tell application "Messages"
    set theChat to first chat whose name is "{GROUP_CHAT_NAME}"
    send "{MESSAGE}" to theChat
end tell
'''
print(f"ran {MESSAGE} in {GROUP_CHAT_NAME}.")
subprocess.run(["osascript", "-e", script], check=True)
```

There is a guy in season one of the show [*The Rehearsal* ](https://en.wikipedia.org/wiki/The_Rehearsal_(TV_series)) by Nathen Fielder. He is obsessed with numbers and there connection with the bible. I think we are all capable of similar arithmetic obsessions.