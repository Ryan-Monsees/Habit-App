using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_Health : MonoBehaviour {


    private GameObject enemy;
    public int health = 10;
    private int damage = 0;
    private Move_Bullet move_bullet;
    private GameObject gameController;

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

    // Triggers when bullet touches it
    private void OnTriggerEnter2D(Collider2D collision)
    {
        // Destroy it if health is gone
        if(collision.gameObject.tag == "bullet")
        {
            damage = collision.gameObject.GetComponent<Move_Bullet>().getDamage();
            health -= damage;

            // Destroys bullet after calculations
            Destroy(collision.gameObject);

            if (health <= 0)
            {
                
                Destroy(enemy);
            }

            
        }
        
    }

    // Use this for initialization
    void Start () {

        enemy = this.gameObject;
        gameController = GameObject.Find("GameController");

    }
	
	// Update is called once per frame
	void Update () {
        
	}

   

   
}
