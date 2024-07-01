import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/



/**
 * Creates an event object for the GreetingChanged event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { greetingChangedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  greetingChangedEvent()
 * ],
 * });
 * ```
 */ 
export function greetingChangedEvent() {
  return prepareEvent({
    signature: "event GreetingChanged(string newGreeting)",
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "greet" function on the contract.
 * @param options - The options for the greet function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { greet } from "TODO";
 * 
 * const result = await greet();
 * 
 * ```
 */
export async function greet(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xcfae3217",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "setGreeting" function.
 */
export type SetGreetingParams = {
  greeting: AbiParameterToPrimitiveType<{"internalType":"string","name":"_greeting","type":"string"}>
};

/**
 * Calls the "setGreeting" function on the contract.
 * @param options - The options for the "setGreeting" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setGreeting } from "TODO";
 * 
 * const transaction = setGreeting({
 *  greeting: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setGreeting(
  options: BaseTransactionOptions<SetGreetingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa4136862",
  [
    {
      "internalType": "string",
      "name": "_greeting",
      "type": "string"
    }
  ],
  []
],
    params: [options.greeting]
  });
};


