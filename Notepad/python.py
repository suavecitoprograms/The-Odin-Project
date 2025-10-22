class Dog():
    def __init__(self):
        self.sound = "bark"
    
    def __str__(self) -> str:
        return self.sound
    
    
dog = Dog()
print(dog)

text = "hallo"
print(len(text))

amIImmutable = "immutability"

print(amIImmutable)

case1 = True
case2 = False

if case1 and case2:
    print(f"Both cases are true")