import { useCookies } from "react-cookie"
import { useEffect } from "react"
import { usePostBrokerInfoMutation } from "../../../../../api/apiSlice"

export const Copyforlink = () => {

    const [cookie] = useCookies(['token'])
    const [PostBrokerInfo] = usePostBrokerInfoMutation()

    useEffect(() => {
        const getinfo = async () => {

            const infobroker = await PostBrokerInfo({ token: cookie.token })
            console.log(infobroker.data)


        }
        getinfo()
    }, [ PostBrokerInfo, cookie.token])



    return (
        <div class="container">
            <header class="header">
                <h3 id="title" class="text-center text-white">Reffral Links</h3>
            </header>
            <div class="form-wrap ">
                <form id="survey-form">
                    <div class="row">
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>(25$)</small></label>
                            <button disabled type="submit" id="submit" class="btnform btn btn-success btn-block">Copy</button>
                        </div>
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>(50$)</small></label>
                            <button disabled type="submit" id="submit" class="btnform btn btn-success btn-block">Copy</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>(100$)</small></label>
                            <button disabled type="submit" id="submit" class="btnform btn btn-success btn-block">Copy</button>
                        </div>
                        <div class="col-md-6">
                            <label id="number-label" for="number"><small>(200$)</small></label>
                            <button disabled type="submit" id="submit" class="btnform btn btn-success btn-block">Copy</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
