using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class Game_Controller : MonoBehaviour {

    public struct Pair
    {
        public int first, second, dup;

        public Pair(int p1, int p2, int p3)
        {
            first = p1;
            second = p2;
            dup = p3;
        }
    }
    public struct Projectile_info
    {
        public float distance, rotation;

        public Projectile_info(float p1, float p2)
        {
            distance = p1;
            rotation = p2;
        }
    }

    // Used to hold array of how close enemy bullets are
    public Projectile_info[] distance_array;
    public int array_size = 10;
    private int index;

   

    // Grabs the child Game Over text
    public TextMeshPro gameOver;

    // Grabs the player
    public GameObject player;

    // MiniBoss
    public GameObject miniBoss;

    // Used for timer to respawn
    private IEnumerator coroutine;

    // Number of lives
    private int lives = 3;

    // Number of enemies that need to be slain to progress
    private int enemies;

    private IEnumerator e_coroutine;
    public GameObject enemy;



    public void HealthCheck(int health, GameObject spaceship)
    {
        if(health <= 0)
        {
            
            Destroy(spaceship);
            Debug.Log("Died");
            // Waits for respawn
            coroutine = Respawn(5.0f);
            StartCoroutine(coroutine);

           
            
        }
        
    }

    private IEnumerator Level1(float waitTime)
    {
        // Spawns Minions
        int enemySpawn = 3;
        while (enemySpawn > 0)
        {
            yield return new WaitForSeconds(waitTime);
            Instantiate(enemy, new Vector3(-50, 0, 0), Quaternion.identity);
            enemySpawn--;
            
        }

        // Spawns miniBosses
        enemySpawn = 1;
        while (enemySpawn > 0)
        {
            yield return new WaitForSeconds(waitTime);
            Instantiate(miniBoss, new Vector3(-50, 0, 0), Quaternion.identity);
            enemySpawn--;

        }

        // Waits until all enemies are dead
        yield return new WaitUntil(() => GameObject.FindGameObjectsWithTag("enemy").Length <= 0);
        StartCoroutine(Level2());
        
    }
    private IEnumerator Level2()
    {
        // Spawns Minions
        int enemySpawn = 5;
        while (enemySpawn > 0)
        {
            yield return new WaitForSeconds(1);
            Instantiate(enemy, new Vector3(-50, 0, 0), Quaternion.identity);
            enemySpawn--;

        }

        // Spawns miniBosses
        enemySpawn = 2;
        while (enemySpawn > 0)
        {
            yield return new WaitForSeconds(1);
            Instantiate(miniBoss, new Vector3(-50, 0, 0), Quaternion.identity);
            enemySpawn--;

        }

        // Waits until all enemies are dead
        yield return new WaitUntil(() => GameObject.FindGameObjectsWithTag("enemy").Length <= 0);

        gameOver.GetComponent<MeshRenderer>().enabled = true;
    }
    private IEnumerator Respawn(float waitTime)
    {

        while (waitTime > 0)
        {
            yield return new WaitForSeconds(1.0f);
            waitTime--;
           
        }

        

        // Check to see if player already created
        GameObject playerCheck;
        playerCheck = GameObject.FindWithTag("player");
        if (playerCheck == null)
        {
            if (lives > 0)
            {
                Instantiate(player, new Vector3(0, -10, 0), Quaternion.identity);
                lives--;
            }
            else
            {
                GameOver();
            }
        }

    }


    void GameOver()
    {
        gameOver.GetComponent<MeshRenderer>().enabled = true;
    }
    //==============================================================================================================================
    // Make it so it records player movements and depending on the distance
    // it will increase the chance the bullet will go at a different angle
    public void recordPosition(float distance, float rotation)
    {
        
        
        if(index < array_size)
        {
            distance_array[index].distance = distance;
            distance_array[index].rotation = rotation;
            index++;
        }
        else
        {
            distance_array[array_size-1].distance = distance;
            distance_array[array_size-1].rotation = rotation;
            index = 0;
        }
        
        
    }

    // Called by E_Move_Bullet to get a Float
    // that is partly random and partly based
    // on the player's movement
    public float ShootPlayer()
    {
        
        float total = 0;
        for(int i = 0; i < array_size-1; i++)
        {
            if (distance_array[i].rotation > 0)
            {
                total += (distance_array[i].rotation - Mathf.Abs(distance_array[i].distance * 2));
            }
            else
            {
                total += (distance_array[i].rotation + Mathf.Abs(distance_array[i].distance * 2));
            }
        }

        // Calculates average and adds randomness
        total = total / (float)array_size;
        total = Random.Range(total - 5.0f, total + 5.0f);
        if (total > 20.0f)
        {
            total = 20.0f;
        }
        else if(total < -20.0f)
        {
            total = -20.0f;
        }

        return total;
    }

    

    //===============================================================================================================================
    // Use this for initialization
    void Start () {

       
        // initializes array and current index
        index = 0;
        distance_array = new Projectile_info[array_size];
        for (int i = 0; i < array_size; i++)
        {
            distance_array[i].distance = 0.0f;
            distance_array[i].rotation = 0.0f;
        }

        // disables Game Over text
        gameOver = this.transform.GetChild(0).GetComponent<TextMeshPro>();
        gameOver.GetComponent<MeshRenderer>().enabled = false;
        
        // Spawns player
        Instantiate(player, new Vector3(0, -10, 0), Quaternion.identity);

        //===================================================
        // Starts Level 1
        //===================================================

        e_coroutine = Level1(1.2f);
        StartCoroutine(e_coroutine);
    }
	
	// Update is called once per frame
	void Update () {
        
    }
}
