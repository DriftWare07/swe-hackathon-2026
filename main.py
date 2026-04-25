from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import json

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

actions = 7

@app.get("/")
async def root():

    return {"actions": actions}

@app.get("/sub")
async def sub():
    global actions
    actions -= 1
    return
