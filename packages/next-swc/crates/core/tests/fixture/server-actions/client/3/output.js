/* __next_internal_action_entry_do_not_use__ {"d4f2e95bc745b6500b439c0847003511748c8ece":"sampleFunction3","bd336abe00c3c59da66acb696fc8e151d8e54ea4":"sampleFunction","a0c73dd6f5af839e3335c6b19262ecb86cca6af4":"sampleFunction2","f03b256ee88a51700367acee3082894e25e6e7d9":"sampleFunction4"} */ import { createActionProxy, encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-proxy";
import { createServerReference } from "private-next-rsc-action-client-wrapper";
export var sampleFunction = createServerReference("bd336abe00c3c59da66acb696fc8e151d8e54ea4");
export var sampleFunction2 = createServerReference("a0c73dd6f5af839e3335c6b19262ecb86cca6af4");
export var sampleFunction3 = createServerReference("d4f2e95bc745b6500b439c0847003511748c8ece");
export var sampleFunction4 = createServerReference("f03b256ee88a51700367acee3082894e25e6e7d9");
