using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class E_Move_Bullet : E_Shoot
{




    public Rigidbody2D projectile;

    // Gets the GameController
    public GameObject gameController;

    // Gets game object of player
    public GameObject player;

    // Gets the bullet
    public GameObject bullet;

    // Gets the top of play area
    public GameObject top;

    // Gets the bottom of play area
    public GameObject bottom;

    // Sonic Speed!
    public float moveSpeed = 30.0f;

    // Used for pointing to player
    Vector2 temp;

    // Grabs the player to shoot torwards
    public Transform target;

    // Boolean for checked player position
    bool checkPlayer = false;

    // Damage to enemy on hit
    public int damage = 5;

    // Rotation from player to shoot towards
    float rotation = 0;

    float height;
    float width;


    // Used to grab damage
    public int getDamage()
    {
        return damage;
    }

    private Vector2 Rotate(Vector2 v, float degrees)
    {
        float sin = Mathf.Sin(degrees * Mathf.Deg2Rad);
        float cos = Mathf.Cos(degrees * Mathf.Deg2Rad);

        float tx = v.x;
        float ty = v.y;
        v.x = (cos * tx) - (sin * ty);
        v.y = (sin * tx) + (cos * ty);
        return v.normalized;
    }


    private void Awake()
    {
        // Main camera
        Camera cam = Camera.main;

        // Gets width and height of camera
        height = 2f * cam.orthographicSize;
        width = height * cam.aspect;

    }




    // Use this for initialization
    void Start()
    {
        // Grabs the rigidbody
        projectile = this.gameObject.GetComponent<Rigidbody2D>();


        gameController = GameObject.Find("GameController");

        if (GameObject.FindWithTag("player") != null)
        {
            target = GameObject.FindWithTag("player").GetComponent<Transform>();
            // Points towards the player
            temp = new Vector2(target.position.x - projectile.position.x, target.position.y - projectile.position.y);

            // Calculates the rotation to predict player movements
            rotation = gameController.GetComponent<Game_Controller>().ShootPlayer();

            temp = Rotate(temp, rotation);
        }





        bullet = this.gameObject;



    }

    // Update is called once per frame
    void Update()
    {


        if (target == null)
        {
            projectile.velocity = new Vector2(0, -1) * moveSpeed;
        }
        else
        {
            projectile.velocity = new Vector2(temp.x, temp.y) * moveSpeed;
        }

        if (projectile.transform.position.y < -((height / 2) + 1))
        {
            Destroy(bullet);
        }

        if (target != null && projectile.transform.position.y < (target.transform.position.y + 3) && !checkPlayer)
        {
            gameController.GetComponent<Game_Controller>().recordPosition(projectile.transform.position.x - target.transform.position.x, rotation);
            checkPlayer = true;
        }

    }




}
