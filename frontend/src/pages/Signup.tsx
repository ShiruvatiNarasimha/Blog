import { Auth } from "../componets/Auth"
import { Quote } from "../componets/Quote"


export const Signup = () => {
    return <div>
        <div className="grid grid-cols-2">
            <div>
              <Auth/>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    </div>
}