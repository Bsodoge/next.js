/* __next_internal_action_entry_do_not_use__ {"6d53ce510b2e36499b8f56038817b9bad86cabb4":"$$ACTION_0"} */ import { createActionProxy, encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-proxy";
async function myAction(...args) {
    return $$ACTION_0.apply(null, (myAction.$$bound || []).concat(args));
}
createActionProxy("6d53ce510b2e36499b8f56038817b9bad86cabb4", null, myAction, $$ACTION_0);
export async function $$ACTION_0(a, b, c) {
    // comment
    'use strict';
    console.log('a');
}
$$ACTION_0.$$closure_args = 0;
export default function Page() {
    return <Button action={myAction}>Delete</Button>;
}
