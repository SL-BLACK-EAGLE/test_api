"use client";
import React, {useState} from "react";

import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import check from "@/lib/check";



export default function App() {
    const [selected, setSelected] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");







    return (
        <div className="flex flex-col justify-center items-center min-h-full w-full" >
            <Card className="max-w-full w-[340px] h-[400px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key="login" title="Login">
                            <form className="flex flex-col gap-4" onSubmit={submit}>
                                <Input
                                    isRequired
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onValueChange={setEmail}
                                />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    value={password}
                                    onValueChange={setPassword}
                                />
                                <p className="text-center text-small">
                                    Need to create an account?{" "}
                                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                                        Sign up
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button
                                        fullWidth
                                        color="primary"
                                        onClick={login}
                                        isLoading={isLoading}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="sign-up" title="Sign up">
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input
                                    isRequired
                                    label="Name"
                                    placeholder="Enter your name"
                                    type="password"
                                />
                                <Input
                                    isRequired
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <p className="text-center text-small">
                                    Already have an account?{" "}
                                    <Link size="sm" onPress={() => setSelected("login")}>
                                        Login
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth color="primary">
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}
