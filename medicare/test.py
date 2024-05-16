import speech_recognition as sr
import pyttsx3
import pywhatkit
import datetime
import wikipedia

listener = sr.Recognizer()
engine = pyttsx3.init()

voices = engine.getProperty("voices")
engine.setProperty("voices", voices[0].id)

def talk(text):
    engine.say(text)
    engine.runAndWait()

def get_command():
    try:
        with sr.Microphone() as source:
            print("Listening....")
            engine.say("sir i am responsible")
            engine.say("i what can help for you")
            engine.runAndWait()
            voice = listener.listen(source)
            command = listener.recognize_google(voice)
            command = command.lower()
            print(command)
            if "tiger" in command:
                command = command.replace("tiger", "")
    except:
        pass
    return command

def run_assistant():
    command = get_command()

    if "time" in command:
        time = datetime.datetime.now().strftime("%H:%M %p")
        talk("Now time is " + time)

    elif "now time" in command:
        time = datetime.datetime.now().strftime("%H:%M %p")
        talk("Now time is " + time)
        
    elif "what is time" in command:
        time = datetime.datetime.now().strftime("%H:%M %p")
        talk("Now time is " + time)

    elif "hi good morning" in command:
        talk("hi good morning, have a great day")
  
           
        
    elif "good morning" in command:
        talk("good morning, have a great day")

    elif "what is your name" in command:
        talk("my name is chatbot")


    elif "aadhar change" in command:
        talk("aadhar card change post office")

    elif "aadhar card change" in command:
        talk("aadhar card change post office")
        
    elif "aadhar change" in command:
        talk("aadhar card change  e sevai maiyam")

    elif "aadhar card change" in command:
        talk("aadhar card change  e sevai maiyam ")

    elif "Community certificate" in command:
        talk("aadhaar card or driving licence")

    elif "Community certificate change" in command:
        talk("aadhaar card or driving licence")

    elif "new driving licence " in command:
        talk("aadhaar card and tenth mark sheet and passport size photo")

        
    elif "stop the chat" in command:
        talk("ok good bye")
        return False
    
    elif "turn off" in command:
        talk("ok sir good bye")
        return False

    elif "exit now" in command:
        talk("good bye")
        return False  # Instead of using 'break', return False to stop the loop
    



    
    else:
        talk("sorry i can't understand tell me again")
    
    return True  # Return True to continue the loop

while True:
    if not run_assistant():  # Check if run_assistant returns False, then break the loop
        break