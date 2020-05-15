using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Emb_Move : MonoBehaviour {

    
    private Vector2 Start;
    private Vector2 End;
    private Rigidbody2D enemy;

 
    private float speed = 7.0f;

    public Game_Controller Game_Controller
    {
        get
        {
            throw new System.NotImplementedException();
        }

        set
        {
        }
    }

    private void Awake()
    {
        int rand = Random.Range(1, 4);

        switch (rand)
        {
            case 1:
                Start = new Vector2(-10, 24);
                break;
            case 2:
                Start = new Vector2(0, 24);
                break;
            case 3:
                Start = new Vector2(10, 24);
                break;
            default:
                Debug.Log("ERROR");
                break;
        }

        enemy = this.GetComponent<Rigidbody2D>();
        


        End = new Vector2(Start.x, 16);
        enemy.transform.position = new Vector2(Start.x, Start.y);    
    }

    // Update is called once per frame
    void Update () {
        float step = speed * Time.deltaTime;


        enemy.transform.position = Vector2.MoveTowards(enemy.transform.position, End, step);
        if(enemy.transform.position.y == End.y)
        {
            this.GetComponent<E_Shoot>().enabled = true;
        }
    }
}
