from pydantic import BaseModel, EmailStr

#Used when the user sends data to register.
class UserRegister(BaseModel):
    username: str
    email: EmailStr
    password: str

#Used when we send data back.
class UserResponse(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        from_attributes = True