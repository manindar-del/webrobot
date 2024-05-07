import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import React, { useState } from "react";

function signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { data: payload, isLoading, isError, error } = useQuery(["sigin"], {
    //     queryFn: async () => {
    //       const res = await axios.post(`/api/signin`)
    //       return res
    //     },
    //   })

    const handleSubmit = () => {

        const mutation = useMutation({
            mutationFn: (data) => {
                return axios
                    .post("api/signin", data)
                    .then((response) => {
                        reset();
                        router.push("/");
                    })
                    .catch((error) => {
                        Swal.fire("Server Error.", "error");
                        console.error("Error:", error);
                    });
            },
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Sign In</button>
        </form>
    )
}

export default signin






