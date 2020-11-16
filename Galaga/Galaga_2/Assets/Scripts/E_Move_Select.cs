using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_Move_Select : MonoBehaviour {

   

	// Use this for initialization
	void Awake () {
        // First num inclusive, last num exclusive
        int rand = Random.Range(1, 4);

         switch (rand)
         {
             case 1:
                 this.gameObject.AddComponent<E_Curve>();
                 break;
             case 2:
                 this.gameObject.AddComponent<E_L_ZigZag>();
                 break;
            case 3:
                this.gameObject.AddComponent<E_Loop>();
                break;
            default:
                 Debug.Log("ERROR");
                 break;
         }
         
        
    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
